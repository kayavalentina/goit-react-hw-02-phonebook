import styled from 'styled-components';

export const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

 export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color:  #3f3f9b;
`;

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 18px;
font-weight: 500;
gap: 20px;
background-color:  #e7a9be;
padding: 16px;
border-radius: 10px;
`;