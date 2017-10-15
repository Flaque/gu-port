import styled from "styled-components";
import Head from "./components/Head.js";
import ArticleList from "./components/ArticleList.js";
import TopBar from "./components/TopBar.js";
import api from "./api";
import Themed from "./Theme";

const AppWrapper = styled.div`width: 100%;`;
const Main = styled.main`width: 100%;`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    api.getPage(0, 0).then(({ data }) => {
      this.state.setState(prevState => {
        prevState.articles.push({
          src: data,
          id: 1 //TODO DONT SET ALL THE IDS TO 1
        });
      });
    });
  }

  render() {
    return (
      <Themed>
        <AppWrapper>
          <Head title="Portfolio" />
          <TopBar />
          <Main>
            <ArticleList articles={this.state.articles} />
          </Main>
        </AppWrapper>
      </Themed>
    );
  }
}

export default App;
