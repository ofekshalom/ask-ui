import { styled } from "@mui/system";
import NoResultSvg from "../../../imgs/no-result.svg";

const StyledNoResultWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const StyledImage = styled("img")`
  width: 200px;
  margin-top: ${(props) => props.theme.spacing(2)};
`;

const StyledMessage = styled("p")`
  color: ${(props) => props.theme.palette.primary.light};
  font-size: 22px;
  font-weight: 600;
`;
const NoResult = () => {
  return (
    <StyledNoResultWrapper>
      <StyledImage src={NoResultSvg} />
      <StyledMessage>
        Sorry we couldn't find any{<br />}
        answers for your question
      </StyledMessage>
    </StyledNoResultWrapper>
  );
};
export default NoResult;
