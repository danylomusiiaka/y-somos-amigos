import { Routes, Route } from "react-router";
import Signup from "./Signup";
import Login from "./Login";
import ShowPage from "./ShowPage";
import DetailedOffer from "./DetailedOffer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/offer/:id" element={<DetailedOffer />} />
      </Routes>
    </>
  );
}

export default App;
