import { IconButton, styled, TextField, Tooltip } from "@mui/material";
import axios from "axios";
import { KeyboardEvent, useEffect, useState } from "react";
import { Box, margin, width } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import Answer from "./Answer";
import { AnswerType } from "../../types/types";

export const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 24px;
  }
`;

const AskQuestion = () => {
  const [questionValue, setQuestionValue] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  function handleKeyPress(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" && questionValue) {
      handleSearchClick();
    }
  }

  function handleSearchClick() {
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

  return (
    <Box
      sx={{
        marginTop: 2,
        width: 582,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextFieldWrapper
        autoFocus
        sx={{ marginBottom: 2, width: "100%" }}
        placeholder="Ask some question"
        value={questionValue}
        size="small"
        onChange={(e) => {
          setQuestionValue(e.target.value);
        }}
        onKeyDown={handleKeyPress}
        InputProps={{
          endAdornment: isButtonLoading ? (
            <CircularProgress
              size={24}
              sx={{ padding: "8px", display: "flex" }}
            />
          ) : (
            <Tooltip title="Search">
              <IconButton onClick={handleSearchClick}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
          ),
        }}
      />

      <>
        {answers.map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
      </>
    </Box>
  );
};

export default AskQuestion;
