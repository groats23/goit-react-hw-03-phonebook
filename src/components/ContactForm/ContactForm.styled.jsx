import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  margin-bottom: 40px;
`;

export const ContactSubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid darkgray;
  border-radius: 5px;
  background-color: white;
`;

export const FormInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0px 20px;
  font-size: 24px;
`;

export const FormInput = styled.input`
  width: 300px;
  margin-top: 4px;
  padding: 4px;
  font-size: 16px;
  border-radius: 5px;
`;

export const FormSubmitBtn = styled.button`
  display: inline-block;
  width: 160px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  :hover,
  :focus {
    background-color: gray;
    box-shadow: 0px 4px 4px #00000026, inset 0px 0px 0px 0px #0000004d;
  }
`;
