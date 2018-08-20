import styled from 'styled-components';

export const Header = styled.h3`
   margin: 20px;
   text-align: center;
   color: #444;
`;

export const GameBoard = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SingleBox = styled.li`
  list-style-type: none;
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const RowItem = styled.ul`
  margin: 0px;
  height: auto;
`;

export const NextTurn = styled.div`
  position: absolute;
  right: 200px;
  margin-top: 20px;
`;
