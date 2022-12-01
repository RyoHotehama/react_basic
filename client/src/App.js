import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CountUpDown from'./components/CountUpDown.jsx';
import HelloReact from'./components/HelloReact.jsx';
import Navigation from'./components/Navigation.jsx';
import SignUp from'./components/account/SignUp.jsx';

function app() {
  return(
  <Router>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<HelloReact />} />
      <Route path="/count-up-down" element={<CountUpDown />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  </Router>
  )
}
export default app;
