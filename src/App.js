import styled from "styled-components";
import Head from "./components/Head.js";
import ArticleList from "./components/ArticleList.js";

const articles = [
  { src: "# Hello there \n I am article", id: "1" },
  { src: "# Yuperino \n text goes here \n ## Subtitle \n mo textrios", id: "2" }
];

const PaddedMain = styled.main`
  padding: 50px;
  width: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <PaddedMain>
        <Head />
        <ArticleList articles={articles} />
      </PaddedMain>
    );
  }
}

export default App;
