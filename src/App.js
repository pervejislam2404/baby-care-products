
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Home/Login/Login';
import Register from './pages/Home/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './pages/Shared/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import AuthContext from './pages/Shared/Context/AuthContext';
import ProductDetails from './pages/Home/Home/ProductDetails/ProductDetails';
import MoreProducts from './pages/Home/MoreProducts/MoreProducts';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App overflow-hidden">
      <AuthContext>
      <Router>
        <Header/>
         <Switch>
           <Route exact path="/">
             <Home/>
           </Route>

           <Route exact path="/home">
             <Home/>
           </Route>

           <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/moreProducts">
              <MoreProducts/>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>


            <PrivateRoute path="/details/:id">
              <ProductDetails/>
            </PrivateRoute>

            <Route path="*">
              <NotFound/>
            </Route>

         </Switch>
         <Footer/>
       </Router>
      </AuthContext>
    </div>
  );
}

export default App;
