import styled from "styled-components";
import {hasError} from "react-hook-form";
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: relative; /*자식 요소의 절대 위치 기준*/
    
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

`;

export const Input = styled.input`
    width: 550px;
    height: 50px;
    padding: 10px;
    border: 1px solid ${(props) => (props.hsError ? "red" : "#ccc")}; /* 에러 시 빨간 테두리 */
    border-radius: 16px;
    font-size: 16px;
    background-color: ${(props) =>
        props.hsError ? "#ffe6e6" : props.isValid ? "#e4ebfb" : "white"}; /* 에러 시 빨간색, 유효하면 연한 파란색 */
    outline: none;

    &:focus {
        border-color: ${(props) => (props.hsError ? "red" : "#2162E9")}; /* 포커스 시 테두리 색상 */
    }
    &::placeholder {
        color: #777C89;
    }
    &:hover {
        border-color: #2162E9; /* 마우스 오버 시 테두리 색상 */
        background-color: ${(props) =>
            props.hsError ? "#ffe6e6" : props.isValid ? "#e4ebfb" : "#f0f8ff"}; /* 마우스 오버 시 배경색 */
    }
    &:active {
        background-color: ${(props) =>
            props.hsError ? "#ffe6e6" : props.isValid ? "#e4ebfb" : "#e4ebfb"}; /* 클릭 시 배경색 */
    }
`;


export const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`;

export const Label = styled.label`
    font-size: 16px;
    margin-bottom: 5px;
    color: #777C89;
`;


export const Logo = styled.img`
    width: 487px;
    height: 147px;
    margin-bottom: 20px;
`;
export const Lion = styled.img`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 155px;
    height: 79px;
    align-self: flex-start;
   
   
`;

export const CheckboxContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-left: 70rem;
    margin-bottom: 20px;
    font-size: 28px;
    color: black;
    input[type="checkbox"] {
        appearance: none;
        width: 30px;
        height: 30px;
        border: 2px solid ;
        border-radius: 100%;
        cursor: pointer;
        margin-right: 10px;
    }
    input[type="checkbox"]:checked {
        background-color: #2162E9;
        border: 2px solid #2162E9;
        box-shadow: 0 0 0 4px white;
    }
         input[type="checkbox"]:checked::after {
        content: "✔"; /* 체크 표시 */
        color: white;
        font-size: 20px;
        display: block;
        text-align: center;
    }
        
`;
export const AutoLogin = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 20px;
   
    `;

export const AnotherLabel = styled.label`
    font-size: 16px;
    color: #777C89;
    margin-top: 40px;
    cursor: pointer;
    text-decoration: underline;
    
    
`;