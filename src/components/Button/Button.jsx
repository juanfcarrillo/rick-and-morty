import styled, { css } from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  border: none;
  box-shadow: 0 10px 20px 4px rgba(35, 35, 35, 0.1);
  ${(props) => props.bordered && css`border: 1px solid #515151;`}
  background-color: white;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    outline: 1px solid #008bf8;
    border: none;
  }
  
  &:active {
    box-shadow: none;
    padding-top: 0.4em;
    padding-bottom: 0.4em;
  }
`

export default Button
