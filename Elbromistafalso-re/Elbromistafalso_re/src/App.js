import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SveikinimasListContainer from './containers/SveikinimasListContainer';

function App() {
  return (
  
    <div className="container">
      
      <BrowserRouter>
          <Switch>
            <Route exact path="/Elbromistafalso-ap"><SveikinimasListContainer/></Route>
          </Switch>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
