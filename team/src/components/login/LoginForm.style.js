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
    font-size: 20px;
   
    `;

export const AnotherLabel = styled.label`
    font-size: 16px;
    color: #777C89;
    margin-top: 40px;
    cursor: pointer;
    text-decoration: underline;
    
    
`;