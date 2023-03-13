import { HTMLAttributes } from "react";
import { Chip, styled } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export const StyledAnswerWrapper = styled("div")`
  border-radius: ${(props) => props.theme.spacing(2)};
  margin-bottom: ${(props) => props.theme.spacing(2)};
  background: white;
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px -4px;
`;

interface StyledHtmlSectionProps extends HTMLAttributes<HTMLDivElement> {
  isBestAnswer?: boolean;
}

export const StyledHtmlSection = styled("div")<StyledHtmlSectionProps>`
  min-height: ${(props) =>
    props.isBestAnswer ? 0 : `calc(72px - ${props.theme.spacing(3)})`};
  margin-top: ${(props) => (props.isBestAnswer ? 0 : props.theme.spacing(3))};
  margin-inline-start: ${(props) => props.theme.spacing(3)};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul:last-child {
    margin-bottom: 0;
  }
`;

export const StyledConfidence = styled("div")`
  height: 72px;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-inline-start: ${(props) => props.theme.spacing(3)};
`;

export const StyledChip = styled(Chip)`
  color: #1b806a;
  background-color: #e2f3eb;
  font-weight: bold;
  font-size: 12px;
  border-radius: ${(props) => props.theme.spacing(1)};
`;

export const StyledTaskAltIcon = styled(TaskAltIcon)`
  color: #1b806a !important;
  font-size: 18px;
`;

export const StyledChipWrapper = styled("div")`
  margin-top: ${(props) => props.theme.spacing(3)};
  margin-inline-end: ${(props) => props.theme.spacing(3)};
`;
