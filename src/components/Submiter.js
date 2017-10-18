import Head from "./Head";
import Themed from "../Theme";
import styled from "styled-components";
import Title from "./Title";
import Link from "next/link";

const AppWrapper = styled.div`width: 100%;`;
const TitleWithMargin = Title.extend`margin-bottom: 25px;`;

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      reason: ""
    };

    this.onUserUpload = this.onUserUpload.bind(this);
  }

  onUserUpload(event) {
    const file = event.target.files[0];

    // For the moment, only let the user upload markdown files
    if (file.type !== "text/markdown") {
      this.setState({
        disabled: true,
        reason:
          "This filetype is not allowed 😭 Please upload a markdown file instead."
      });
      return;
    }

    // Otherwise, make sure we're not disabled
    this.setState({ disabled: false });
  }

  render() {
    return (
      <div>
        <label htmlFor="title"> Title </label>
        <input type="text" placeholder="Super Cool iOS App" id="title" />

        <label htmlFor="author"> Author </label>
        <input type="text" placeholder="George" id="author" />

        <label htmlFor="file"> Markdown File </label>
        <input type="file" onChange={this.onUserUpload} />

        <button disabled={this.state.disabled}> Submit </button>
        <Link href="/" prefetch>
          <button className="button button-clear"> Cancel </button>
        </Link>

        {this.state.disabled && <div> {this.state.reason} </div>}
      </div>
    );
  }
}

export default () => (
  <Themed>
    <AppWrapper>
      <Head title="Submit" />
      <TitleWithMargin> Add a new post </TitleWithMargin>
      <p>
        You can submit a Markdown file (like on a Github README) as a post and
        we'll make it pretty! Anything you can do on Github, you can do here.
      </p>

      <SubmitForm />
    </AppWrapper>
  </Themed>
);
