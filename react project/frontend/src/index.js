import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Documents from "./components/Document";
import SignUp from "./components/Signup";
import SignIn from "./components/SignIn";
import Predict from "./components/Predict";
import Team from "./components/Team";
import Rhymes from "./components/rhymes";
import Tutorial from "./components/Tutorial";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/documents" element={<Documents />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/predict" element={<Predict />}></Route>
        <Route path="/rhymes" element={<Rhymes />}></Route>
        <Route path="/tutorial" element={<Tutorial />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);