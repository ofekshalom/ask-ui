import { TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import { useEffect, useState } from "react";

const AskQuestion = () => {
  const [questionValue, setQuestionValue] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [answers, setAnswers] = useState([]);

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
    <div>
      <div>
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
      </div>

      {answers.map((answer) => {
        return <div>sss</div>;
      })}
    </div>
  );
};

export default AskQuestion;
