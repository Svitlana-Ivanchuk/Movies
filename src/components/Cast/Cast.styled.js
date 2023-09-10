import styled from 'styled-components';

export const CastListStyle = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
  justify-content: center;
`;

export const CastCardStyle = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastCardInfoStyle = styled.div`
  text-align: center;
  background-color: #f4f4fd;
`;
