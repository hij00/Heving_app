import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyled";

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
    align-items: center;
    width: 100%;
  }
`;
const Logo = styled.h3`
  font-size: 30px;
  font-weight: 900;
  color: ${mainStyle.logoColor};
`;
const Title = styled.h3`
  font-size: 14px;
  font-weight: 300;
  opacity: 0.7;
  margin-top: 20px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid ${mainStyle.logoColor};
  padding: 10px 10px;
  margin-bottom: 15px;
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

const userDb = {
  dbUsername: "test111",
  dbPw: "11111111",
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm({ mode: "onChange" });

  // console.log(errors);

  const onSubmit = () => {
    const { email, pw } = getValues();
    // console.log(email, pw);
    const { dbUsername, dbPw } = userDb;
    // console.log(dbUsername, dbPw);

    if (email !== dbUsername) {
      setError("idResult", { message: "아이디가 일치하지 않습니다" });
    }
    if (pw !== dbPw) {
      setError("pwResult", { message: "비밀번호가 일치하지 않습니다" });
    }
    if (email === dbUsername && pw === dbPw) {
      alert("로그인 되었습니다");
    }
  };
  // console.log(errors);

  return (
    <Wrap>
      <TextWrap>
        <Logo>Heving</Logo>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            {...register("email", {
              required: "아이디는 필수입니다",
              minLength: {
                value: 6,
                message: "아이디는 6자리 이상 작성해야합니다",
              },
            })}
            placeholder="아이디를 입력해주세요"
          ></Input>
          {errors?.email?.message}
          {errors?.idResult?.message}
          <Input
            type="password"
            {...register("pw", {
              required: "비밀번호는 필수입니다",
              minLength: {
                value: 8,
                message: "비밀번호는 8자리 이상 작성해야합니다",
              },
            })}
            placeholder="비밀번호를 입력해주세요"
          ></Input>
          {errors?.pw?.message}
          {errors?.pwResult?.message}

          <Button>로그인</Button>
        </form>

        <Title>
          비밀번호 찾기 | <Link to={"/join_us"}>회원가입</Link>
        </Title>
      </TextWrap>
    </Wrap>
  );
};
