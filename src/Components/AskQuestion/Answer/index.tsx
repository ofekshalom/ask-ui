import { Box, Divider } from "@mui/material";
import { AnswerType } from "../../../types/types";

interface AnswerProps {
  answer: AnswerType;
}
const Answer = ({ answer }: AnswerProps) => {
  const { id, confidence, html } = answer;

  return (
    <Box key={id} sx={{ padding: 4, marginBottom: 4, background: "gray" }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Divider />
      <div>Confidence:{parseFloat(`${confidence}`).toFixed(2)} %</div>
    </Box>
  );
};

export default Answer;
