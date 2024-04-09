import styled from 'styled-components';

export const ChainOptionContainer = styled.div`
  width: inherit;
  height: 100%;
  align-content: center;

  & div {
    text-align: center;
  }
`;
export const AddAssetButton = styled.button`
  width: fit-content;
  height:48px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
