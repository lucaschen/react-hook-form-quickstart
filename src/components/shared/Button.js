import styled from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  appearance: none;
  background-color: #0056bf;
  border: 0;
  border-radius: 0.125em;
  color: white;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  outline: none;
  padding: 0.5rem 0.85rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.25s, box-shadow 0.25s,
    color 0.25s, transform 0.25s;
  vertical-align: middle;

  :not(:disabled):hover {
    background-color: #0053b2;
    cursor: pointer;
  }

  :hover {
    cursor: pointer;
  }
`;

export default Button;
