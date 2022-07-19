import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../../components/Container";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { noImg, imgUrl } from "../../constants";

const SearchTitle = styled.h1`
  margin: 250px 0 20px 0;
  font-size: 30px;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  @media screen and (max-width: 500px) {
    margin: 200px 0 2px 0;
    font-size: 22px;
  }
`;

const SearchDesc = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  opacity: 0.6;
  margin-bottom: 50px;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

const SearchWrap = styled.div`
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
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
  padding: 15px;
  box-sizing: border-box;
  font-size: 20px;
  margin-bottom: 20px;
  &::placeholder {
    font-size: 20px;
    color: black;
  }
  color: black;
  @media screen and (max-width: 500px) {
    padding: 5px;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
      color: black;
    }
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 400px;
  @media screen and (max-width: 500px) {
    height: 270px;
  }
`;

const TextWrap = styled.div``;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Title = styled.h3`
  font-size: 22px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const Item = styled.p`
  font-size: 16px;
  opacity: 0.7;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
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

  return (
    <>
      <PageTitle title="검색" />
      <Container>
        <SearchTitle>찾으시는 영화가 있으신가요?</SearchTitle>
        <SearchDesc>인기 영화부터 계봉 예정 영화까지</SearchDesc>
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
                    <Con key={movie.id}>
                      <Link to={`/movie_detail/${movie.id}`}>
                        <Bg
                          style={{
                            background: `url(${
                              movie.backdrop_path
                                ? `${imgUrl}${movie.backdrop_path}`
                                : `${noImg}`
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
                  ))}
                </ConWrap>
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};
