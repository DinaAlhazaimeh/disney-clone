
import './App.css';
import Login from "./components/Login"
import Header from './components/Header'
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail';
function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/home">
            
            <Home/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
            </Route>
        </Switch>
     </Router>
    
    </div>
  );
}

export default App;
