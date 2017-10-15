import Head from "./components/Head.js";
import Markdown from "./components/Markdown.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Head />

        <Markdown />
      </div>
    );
  }
}

export default App;
