import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyled";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { PageTitle } from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-top: 50px;
    width: 100%;
  }
`;
const Logo = styled.h3`
  font-size: 30px;
  font-weight: 900;
  color: ${mainStyle.logoColor};
`;

const Title = styled.h3`
  margin: 20px 0;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid ${mainStyle.logoColor};
  padding: 10px 0;
  box-sizing: border-box;
  margin-bottom: 15px;
  & ::placeholder {
  }
`;

const Gender = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Radio = styled.div`
  .woman {
    margin-left: 70px;
  }
  margin: 20px 0;
`;

const Button = styled.button`
  all: unset;
  background-color: white;
  opacity: 0.5;
  width: 100%;
  padding: 20px 10px;
  margin-top: 20px;
  color: #333;
  font-size: 22px;
  font-weight: 900;
  text-align: center;
  border-radius: 20px;
`;

const Error = styled.p``;

const userDb = {
  dbEmail: "test",
  dbPw: "111111",
  dbPwRe: "111111",
};

export const JoinUs = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = () => {
    const { email } = getValues();
    const { dbEmail } = userDb;

    if (email !== dbEmail) {
      setError("idResult", { message: "이미 존재하는 아이디입니다" });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <PageTitle title="회원가입" />
      <Wrap>
        <TextWrap>
          <Logo>Heving</Logo>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Title>아이디</Title>
            <Input
              type="text"
              {...register("email", {
                required: "아이디는 필수입니다",
                minLength: {
                  value: 4,
                  message: "4자리 이상 작성해야합니다",
                },
              })}
              placeholder="이름을 입력해주세요"
            ></Input>
            {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
            {errors?.idResult?.message && (
              <Error>{errors?.idResult?.message}</Error>
            )}

            <Title>비밀번호</Title>
            <Input
              type="text"
              {...register("password", {
                required: "비밀번호는 필수입니다",
                minLength: {
                  value: 6,
                  message: "6자리 이상 작성해야합니다",
                },
              })}
              placeholder="비밀번호를 입력해주세요"
            ></Input>
            {errors?.password?.message && (
              <Error>{errors?.password?.message}</Error>
            )}
            <Input
              type="text"
              {...register("pw_re", {
                required: "비밀번호는 필수입니다",
                minLength: {
                  value: 6,
                  message: "6자리 이상 작성해야합니다",
                },
                validate: (value) =>
                  password.current === value || "비밀번호가 일치하지 않습니다",
              })}
              placeholder="비밀번호를 한번 더 입력해주세요"
            ></Input>
            {errors?.pw_re?.message && <Error>{errors?.pw_re?.message}</Error>}
            <Gender>
              <Title>성별</Title>
              <Radio>
                <input
                  type="radio"
                  {...register("gender", { required: true })}
                  value="남"
                  id="gender-1"
                />
                <label htmlFor="gender-1">남</label>
                <input
                  className="woman"
                  type="radio"
                  {...register("gender", { required: true })}
                  value="여"
                  id="gender-2"
                />
                <label htmlFor="gender-2">여</label>
              </Radio>
            </Gender>
            <Title>동의</Title>
            <Button>회원가입</Button>
          </form>
        </TextWrap>
      </Wrap>
    </>
  );
};
