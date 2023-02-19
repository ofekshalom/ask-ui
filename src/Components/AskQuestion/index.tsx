import { Divider, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, margin, width } from "@mui/system";

interface Answer {
  confidence: number;
  html: string;
}

const AskQuestion = () => {
  const [questionValue, setQuestionValue] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  function handleSearchClick(e: any) {
    setIsButtonLoading(true);
    axios
      .post("http://localhost:3031/ask", { question: questionValue })
      .then((response) => {
        setAnswers(response.data);
      });
  }

  useEffect(() => {
    setIsButtonLoading(false);
  }, [answers]);
  console.log(answers);

  return (
    <Box>
      <Box
        sx={{ marginBottom: 1, display: "flex", alignItems: "center", gap: 2 }}
      >
        <TextField
          placeholder="Ask some question"
          value={questionValue}
          onChange={(e) => {
            setQuestionValue(e.target.value);
          }}
        />
        <LoadingButton
          loading={isButtonLoading}
          variant="contained"
          onClick={handleSearchClick}
        >
          Search
        </LoadingButton>
      </Box>
      <>
        {answers.map((answer, index) => {
          console.log(answer);
          return (
            <Box
              key={index}
              sx={{ padding: 4, marginBottom: 4, background: "gray" }}
            >
              <div dangerouslySetInnerHTML={{ __html: answer.html }} />
              <Divider />
              <div>
                Confidence:{parseFloat(`${answer?.confidence}`).toFixed(2)} %
              </div>
            </Box>
          );
        })}
      </>
    </Box>
  );
};

export default AskQuestion;
