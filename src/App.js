import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./component/checkout/Checkout";
import Header from "./component/header/Header";

function App() {
  return (
    <div>
      <Router>
        <Route path="/checkout">
        <Header />
        <Checkout />
        </Route>
      </Router>
    </div>
  );
}

export default App;
   