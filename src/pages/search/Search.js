import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../../components/Container";
import { Loading } from "../../components/Loading";
import { imgUrl } from "../../constants";

const SearchWrap = styled.div`
  margin: 350px 0 150px 0;
`;

const Form = styled.form`
  &:nth-child(2) {
    font-size: 50px;
  }
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  margin-bottom: 20px;
  &::placeholder {
    font-size: 20px;
    color: black;
  }
  /* &:required {
    font-size: 50px;
  } */
  color: black;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
`;

const Con = styled.div`
  /* width: 200px;
  height: 300px; */
`;

const Bg = styled.div`
  height: 400px;
`;

const TextWrap = styled.div``;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Title = styled.h3`
  font-size: 22px;
`;

const Item = styled.p`
  font-size: 16px;
  opacity: 0.7;
`;

export const Search = () => {
  const [scMovie, setScMovie] = useState();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onBlur",
  });

  const searchMovie = async () => {
    const { search: term } = getValues();
    setLoading(true);
    try {
      // console.log(await movieApi.search(term))
      const {
        data: { results },
      } = await movieApi.search(term);
      if (results.length <= 0) {
        setError("result", { message: "영화가 존재하지 않습니다." });
      } else {
        setScMovie(results);
      }
      setLoading(false);
    } catch (error) {}
  };
  console.log(scMovie);

  return (
    <Container>
      <SearchWrap>
        <Form onSubmit={handleSubmit(searchMovie)}>
          <Input
            {...register("search", {
              required: "검색어를 입력하셔야 합니다.",
              onChange() {
                clearErrors("result");
              },
            })}
            type="text"
            placeholder="검색어를 입력해주세요"
          />
          {errors?.search?.message}
        </Form>
      </SearchWrap>
      {loading ? (
        <Loading />
      ) : (
        <>
          {scMovie && (
            <>
              <ConWrap>
                {scMovie.map((movie) => (
                  <>
                    <Con key={movie.id}>
                      <Link to={`/movie_detail/${movie.id}`}>
                        <Bg
                          style={{
                            background: `url(${
                              movie.backdrop_path
                                ? `${imgUrl}${movie.backdrop_path}`
                                : "https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg"
                            }) no-repeat center / cover`,
                          }}
                        ></Bg>
                      </Link>

                      <TextWrap>
                        <TitleWrap>
                          <Title>{movie.title}</Title>
                          <Item>{movie.original_language}</Item>
                        </TitleWrap>
                        <Item>{movie.release_date}</Item>
                      </TextWrap>
                    </Con>
                  </>
                ))}
              </ConWrap>
            </>
          )}
        </>
      )}
    </Container>
  );
};
