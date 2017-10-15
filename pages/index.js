import App from "../src/App.js";
import styled, { injectGlobal } from "styled-components";

const Centered = styled.div`
  display: flex;
  justfiy-content: center;
  align-items: center;
  max-width: 700px;
  margin: auto;
  margin-top: 50px;
`;

export default () => (
  <Centered>
    <App />
  </Centered>
);
