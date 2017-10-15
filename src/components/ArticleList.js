import Markdown from "./Markdown.js";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.articles) {
      return <div>We can't find any posts :(</div>;
    }

    const articles = this.props.articles.map(({ src, id }) => [
      <Markdown src={src} key={`${id}-mark`} />,
      <hr key={`${id}-hr`} />
    ]);

    return <div>{articles}</div>;
  }
}

export default ArticleList;
