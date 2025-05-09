import styled from "styled-components";

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
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
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

export const CheckBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    font-size: 16px;
    color: black;
    input {
        margin-right: 10px;
    }
`;

export const AnotherLabel = styled.label`
    font-size: 16px;
    color: #777C89;
    margin-top: 40px;
    cursor: pointer;
    text-decoration: underline;
    
    
`;