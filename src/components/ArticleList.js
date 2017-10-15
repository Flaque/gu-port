import Markdown from "./Markdown.js";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const articles = this.props.articles.map(({ src, id }) => [
      <Markdown src={src} key={`${id}-mark`} />,
      <hr key={`${id}-hr`} />
    ]);

    return <div>{articles}</div>;
  }
}

export default ArticleList;
