import styled from "styled-components";

const TextFieldSC = styled.input.attrs({
  type: "text"
})`
  appearance: none;
  background: white;
  border: 0;
  border-bottom: 0.0625em solid #cccccc;
  border-radius: 0;
  box-sizing: border-box;
  display: block;
  font-size: 1rem;
  height: 2.5em;
  line-height: 1.25;
  padding: 0.5em 0.55em;
  transition: border-bottom-color 0.25s, color 0.25s;
  width: 100%;

  :focus {
    border-bottom-color: #0056bf;
    outline: none;
  }

  :disabled:hover {
    cursor: not-allowed;
  }
`;

export default TextFieldSC;
