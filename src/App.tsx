import { useEffect, useState } from "react";
import axios from "axios";
import AskQuestion from "./Components/AskQuestion";

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
    <div>
      <AskQuestion />
    </div>
  );
}

export default App;
