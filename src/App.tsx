import { useEffect, useState } from "react";
import axios from "axios";
import AskQuestion from "./Components/AskQuestion";
import { Box } from "@mui/material";

function App() {
  const [exampleResponse, setExampleResponse] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3031/example")
      .then((response) => {
        setExampleResponse(response?.data?.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <AskQuestion />
    </Box>
  );
}

export default App;
