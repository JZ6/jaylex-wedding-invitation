import styled from '@emotion/styled';

const RoundButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 20px;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  color: black;
  text-decoration: none;
  background-color: #a7c1ee;
  margin: 1em;
`.withComponent('a');

export default RoundButton;
