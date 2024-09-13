
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Job from './components/Job';


const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/jobs/:id" component={Job} />
    
  </Switch>
  </BrowserRouter>


  
  
    

)
export default App;