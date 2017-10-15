import UserSVG from "../../assets/user.svg";
import UploadSVG from "../../assets/upload.svg";
import styled from "styled-components";

const Icon = styled.div`
  padding: 5px;
  line-height: 14px;
  height: 14px;
  cursor: pointer;
  :hover {
    svg {
      stroke: ${props => props.theme.colors.primary};
    }
  }
`;
const TopBarWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
`;

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TopBarWrapper>
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
