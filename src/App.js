import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar></Navbar>

        <div className='content'></div>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/create'>
            <Create></Create>
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails></BlogDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
