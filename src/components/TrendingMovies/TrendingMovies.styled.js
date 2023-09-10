import styled from 'styled-components';

export const ListStyle = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 16px;
  justify-content: center;
`;

export const ItemStyle = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const TitleStyle = styled.h2`
  background-color: #f4f4fd;
  text-align: center;
  height: 80px;
`;
