import styled, { css } from 'styled-components'

const InputGroup = styled.div`
  position: relative;
  max-width: 150px;
  width: 6em;
  border: ${(props) => (props.bordered ? '1px solid #515151' : 'none')};
  padding: ${(props) => (props.bordered ? '0.5em;' : '0')};
  border-radius: ${(props) => (props.bordered ? '5px;' : '0')};

  ${({ value }) =>
    value &&
    css`
      .input ~ .input-label {
        top: -10px;
        font-size: 14px;
      }
    `}

  ${({ bordered }) =>
    bordered &&
    css`
      .input-label {
        background-color: white;
        padding: 0 2px;
      }
      .input:focus ~ .input-label {
        transform: scale(0.9);
      }
    `}
  
  .input {
    font-size: 13px;
    padding: 5px 5px 5px 2px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
    outline: none;
  }

  .input-label {
    color: #999;
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 5px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .input:focus ~ .input-label {
    top: -10px;
    font-size: 14px;
  }

  .input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: #5264ae;
    }

    to {
      width: 0;
      background: transparent;
    }
  }
`

export default InputGroup
