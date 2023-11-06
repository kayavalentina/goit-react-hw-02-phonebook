import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 330px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  gap : 10px ;
`;

export const ContactInfo = styled.div`
  flex: 1;
`;

export const Name = styled.p`
  font-size: 18px;
 font-weight: 500;
 margin: 0;
`;

export const PhoneNumber = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;

export const DeleteButton = styled.button`
  background-color: #e8817a;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
`;