import Head from "./Head";
import Themed from "../Theme";
import styled from "styled-components";
import Title from "./Title";
import Link from "next/link";

const AppWrapper = styled.div`width: 100%;`;
const TitleWithMargin = Title.extend`margin-bottom: 25px;`;

class SubmitForm extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="title"> Title </label>
        <input type="text" placeholder="Super Cool iOS App" id="title" />

        <label htmlFor="author"> Author </label>
        <input type="text" placeholder="George" id="author" />

        <label htmlFor="file"> Markdown File </label>
        <input type="file" />

        <button> Submit </button>
        <Link href="/" prefetch>
          <button className="button button-clear"> Cancel </button>
        </Link>
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
