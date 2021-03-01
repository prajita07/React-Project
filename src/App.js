
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddToCart from './AddToCart';
import ProductDetails from './ProductDetails';

function App() {
 
  return (
    <Router>
    <div className="App">
     <Navbar/>
     <div className="content">
      <Switch>
        <Route exact path="/">
        <Home />  
        </Route>

        <Route  path="/addtocart">
        <AddToCart />  
        </Route>

        <Route  path="/products/:id">
        <ProductDetails />  
        </Route>

      </Switch>
       
     </div>
    
    </div>
    </Router>
  );
}

export default App;
