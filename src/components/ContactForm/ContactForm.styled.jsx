import styled from 'styled-components';
import {  Field } from 'formik';

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  background-color: #b1a0db;
  padding: 20px;
  border-radius: 10px;
`;

export const Label = styled.label`
  font-size: 12px;
  color:  black;
`;

export const Input = styled(Field)`
  width: 90%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const ErrorMessageContainer = styled.div`
  color: #ff0000;
  font-size: 10px;
`;

export const SubmitButton = styled.button`
  margin-left: 75px;
  margin-top: 10px;
  background-color: #545557;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;