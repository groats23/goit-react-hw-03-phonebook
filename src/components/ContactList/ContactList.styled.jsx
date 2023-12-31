import styled from '@emotion/styled';

export const TotalContactsText = styled.p`
  font-size: 18px;
`;

export const TotalContactsNum = styled.span`
  margin-left: 4px;
  color: blue;
`;

export const PhonebookList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  border: 1px solid darkgray;
  border-radius: 5px;
  background-color: white;
`;

export const ListElement = styled.li`
  :first-child {
    padding-top: 20px;
  }

  :last-child {
    padding-bottom: 20px;
  }

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const NotificationText = styled.p`
  font-size: 18px;
`;
