import { Divider } from "@mui/material";
import { AnswerType } from "../../../types/types";
import {
  StyledAnswerWrapper,
  StyledChip,
  StyledChipWrapper,
  StyledConfidence,
  StyledHtmlSection,
  StyledTaskAltIcon,
} from "./Answer.styles";

interface AnswerProps {
  answer: AnswerType;
}

const Answer = ({ answer }: AnswerProps) => {
  const { id, confidence, html, isBestAnswer } = answer;
  console.log(isBestAnswer);

  return (
    <StyledAnswerWrapper key={id}>
      {isBestAnswer && (
        <StyledChipWrapper
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <StyledChip icon={<StyledTaskAltIcon />} label="Best" />
        </StyledChipWrapper>
      )}
      <StyledHtmlSection isBestAnswer={isBestAnswer}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledHtmlSection>
      <Divider />
      <StyledConfidence>Confidence: {confidence.toFixed(2)} %</StyledConfidence>
    </StyledAnswerWrapper>
  );
};

export default Answer;
