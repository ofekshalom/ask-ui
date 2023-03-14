import { IconButton, styled, TextField, Tooltip } from "@mui/material";
import axios, { HttpStatusCode } from "axios";
import { KeyboardEvent, useEffect, useState } from "react";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import Answer from "./Answer";
import { AnswerType } from "../../types/types";
import AnswerSkeleton from "./Answer/AnswersSkeleton";
import ServerError from "../Common/ServerError";
import NoResult from "../Common/NoResult";

export const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 24px;
  }
`;
const httpErrorToErrorMessage: Record<number | string, string> = {
  403: "Please enter a question",
  404: "Sorry we could'nt handle your question.",
  ECONNABORTED: "Sorry we couldn't send your question",
};

const AskQuestion = () => {
  const [questionValue, setQuestionValue] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [answers, setAnswers] = useState<AnswerType[]>();
  const [errorMessage, setErrorMessage] = useState("");

  function handleKeyPress(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  function handleSearch() {
    if (!questionValue || isFetching) {
      return;
    }

    setIsFetching(true);
    setErrorMessage("");

    axios
      .post(
        "http://localhost:3031/ask",
        { question: questionValue },
        { timeout: 10_000 }
      )
      .then((response) => {
        setAnswers(response.data);
      })
      .catch((err) => {
        const errorCode = (err?.response?.status || err?.code) as number;

        setErrorMessage(httpErrorToErrorMessage[errorCode] ?? err?.message);
        setAnswers(undefined);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }

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
        sx={{ marginBottom: 3, width: "100%" }}
        placeholder="Ask me some question"
        value={questionValue}
        size="small"
        onChange={(e) => {
          setQuestionValue(e.target.value);
        }}
        onKeyDown={handleKeyPress}
        InputProps={{
          endAdornment: isFetching ? (
            <CircularProgress
              size={24}
              sx={{ padding: "8px", display: "flex" }}
            />
          ) : (
            <Tooltip title="Search">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
          ),
        }}
      />

      {isFetching && <AnswerSkeleton />}

      <>
        {!isFetching &&
          answers?.map((answer) => <Answer key={answer.id} answer={answer} />)}

        {errorMessage && <ServerError errorMessage={errorMessage} />}

        {!isFetching && answers?.length === 0 && <NoResult />}
      </>
    </Box>
  );
};

export default AskQuestion;
