import { AlertTitle } from "@mui/material";
import { StyledAlert } from "./ServerError.styles";

interface ServerErrorProps {
  errorMessage: string;
}

const ServerError = ({ errorMessage }: ServerErrorProps) => {
  return (
    <StyledAlert severity="error">
      <AlertTitle>Error</AlertTitle>
      {errorMessage}
    </StyledAlert>
  );
};
export default ServerError;
