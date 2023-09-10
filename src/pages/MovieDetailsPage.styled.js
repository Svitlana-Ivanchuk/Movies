import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const InformListStyle = styled.div`
  display: flex;
  gap: 16px;
`;

export const MoviedetailStyle = styled.div`
  margin-top: 12px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  max-width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 12px;
  background-color: #f4f4fd;

  &.active {
    color: white;
    background-color: #4d5ae5;
  }
`;
