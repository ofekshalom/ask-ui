import { Alert, styled } from "@mui/material";

export const StyledAlert = styled(Alert)`
  border-radius: ${(props) => props.theme.spacing(2)};
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px -4px;
  padding: ${(props) => props.theme.spacing(2)};
`;
