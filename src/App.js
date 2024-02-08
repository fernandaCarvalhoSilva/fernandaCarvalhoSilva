import { Routes, Route} from "react-router-dom";
import Portfolio from "./routes/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/resume" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;