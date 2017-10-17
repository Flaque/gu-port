import Main from "../src/Main";
import Centered from "../src/components/Centered";
import React from "react";
import api from "../src/api";

export default class extends React.Component {
  static async getInitialProps() {
    const { data } = await api.getPageList(3, 0);
    return { articles: data.pages };
  }

  render() {
    return (
      <Centered>
        <Main articles={this.props.articles} />
      </Centered>
    );
  }
}
