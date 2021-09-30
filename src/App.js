import Header from "./components/Header";
import Home from "./views/Home";
import Cart from "./views/Cart";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
 <Router>
     <Header />
     <Route exact path="/"><Home /></Route>
     <Route path="/cart"><Cart /></Route>
 </Router>
  );
}

export default App;
