import UserSVG from "../../assets/user.svg";
import UploadSVG from "../../assets/upload.svg";
import styled from "styled-components";

const Icon = styled.div`
  padding: 5px;
  cursor: pointer;
  :hover {
    svg {
      stroke: ${props => props.theme.colors.primary};
    }
  }
  display: inline-block;
`;
const TopBarWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
`;

const Title = styled.h3`
  width: 100%;
  margin: 0;
`;

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TopBarWrapper>
        <Title>The Portfolio</Title>

        <Icon>
          <UserSVG />
        </Icon>
        <Icon>
          <UploadSVG />
        </Icon>
      </TopBarWrapper>
    );
  }
}

export default TopBar;
