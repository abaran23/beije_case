import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Medium from "./components/Medium";

function App() {
  return (
    <Router>
      <Header />
      <Medium />
      <Footer />
    </Router>
  );
}

export default App;
