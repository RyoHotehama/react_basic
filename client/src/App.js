import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HelloReact from'./components/HelloReact.jsx';
import Navigation from'./components/Navigation.jsx';
import CountUpDown from'./components/CountUpDown.jsx';
function app() {
  return(
  <Router>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<HelloReact />} />
      <Route path="/count-up-down" element={<CountUpDown />} />
    </Routes>
  </Router>
  )
}
export default app;