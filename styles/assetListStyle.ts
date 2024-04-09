import styled from 'styled-components';

// 使用 styled 创建一个样式化的 button 组件
export const AssetButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover {
    background-color: #0056b3;
  }
`;
