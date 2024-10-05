import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer/Footer";
import Product2 from "./Products2/Products2";

function App() {
  return (
    <>
      <NavBar />
      <br></br>
      
      <Switch>
        <Route exact path="/" component={Home} />
       
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default App;
