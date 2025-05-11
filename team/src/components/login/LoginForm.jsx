import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as S from "./LoginForm.style";
import { Button } from "../common/Button.style"; // Button import
import School from "../../assets/School.png"; // Import your logo image
import Lion from "../../assets/Lion.png"; // Import your lion image

const dummyUser = {
    name: "최멋사",
    number: "2135648"
};

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");

    const nameValue = watch("name", ""); // "name" 필드의 현재 값
    const numberValue = watch("number", ""); // "number" 필드의 현재 값

    const onSubmit = (data) => {
        const { name, number } = data;
        if (name === dummyUser.name && number === dummyUser.number) {
            setLoginError("");
            navigate("/main");
        } else {
            setLoginError("⚠️ 이름과 학번이 잘못되었습니다");
        }
    };

    return (
        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
            <S.Lion src={Lion} alt='Lion'></S.Lion>
            <S.Logo src={School} alt='School'></S.Logo>
            
            <S.InputBox>
            <S.Label htmlFor="name">이름</S.Label>
                <S.Input
                    id="name"
                    type="text"
                    placeholder= "👤 이름을 입력해주세요"
                    hsError={!!errors.name}
                    {...register("name", {
                        required: "이름을 입력해주세요",
                        pattern: {
                            value: /^[가-힣]{2,4}$/,
                            message: "⚠️ 한글만 입력 가능합니다."
                        }
                    })}
                />
                
            </S.InputBox>
            {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
            
            <S.InputBox>
            <S.Label htmlFor="number">학번</S.Label>
                <S.Input
                    id="number"
                    type="text"
                    placeholder= "🔒 학번을 입력해주세요"
                    hsError={!!errors.number}
                    {...register("number", {
                        required: "학번을 입력해주세요",
                        pattern: {
                            value: /^[0-9]{7}$/,
                            message: "⚠️ 7자리 숫자만 입력 가능합니다."
                        }
                    })}
                />
                
            </S.InputBox>
            {errors.number && <S.ErrorMessage>{errors.number.message}</S.ErrorMessage>}

            {loginError && <S.ErrorMessage>{loginError}</S.ErrorMessage>}
            <S.CheckboxContainer>
                <input 
                    id="autoLogin"
                    type="checkbox" 
                    {...register("autoLogin")}
                />
                <S.AutoLogin htmlFor="autoLogin">자동 로그인</S.AutoLogin>
                </S.CheckboxContainer>
            <Button type="submit">로그인</Button>
            <S.AnotherLabel>다른 학교 선택</S.AnotherLabel>
        </S.FormContainer>
    );
};

export default LoginForm;