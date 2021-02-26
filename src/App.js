import Grid from './Components/Grid/Grid';
import List from './Components/List/List';
import Map from './Components/Map/Map';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <ul>
          <li><Link to='/'>Grid</Link></li>
          <li><Link to='list'>List</Link></li>
          <li><Link to='map'>Map</Link></li>
        </ul>
      </header>
      <Route path='/' exact component={Grid} />
      <Route path='/list' component={List} />
      <Route path='/map' component={Map} />
    </div>
  );
}

export default App;
