import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../../components/Container";
import { mainStyle } from "../../styles/GlobalStyled";

const SearchWrap = styled.div`
  margin-top: 150px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
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
  console.log(errors);

  return (
    <Container>
      <SearchWrap>
        <form onSubmit={handleSubmit(searchMovie)}>
          <Input
            {...register("search", {
              required: "검색어를 입력하셔야 합니다.",
              onChange() {
                clearErrors("result");
              },
            })}
            type="text"
            placeholder="검색어를 입력해주세요"
            {...errors?.search?.message}
          />
        </form>
      </SearchWrap>
    </Container>
  );
};
