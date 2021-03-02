import Grid from './Components/Grid/Grid';
import List from './Components/List/List';
import Map from './Components/Map/Map';
import { Route, NavLink } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><NavLink to='/' exact>Grid</NavLink></li>
            <li><NavLink to='list'>List</NavLink></li>
            <li><NavLink to='map'>Map</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Route path='/' exact component={Grid} />
        <Route path='/list' component={List} />
        <Route path='/map' component={Map} />
      </main>
    </div>
  );
}

export default App;
