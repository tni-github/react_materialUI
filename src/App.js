
import './App.css';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage.jsx';
import { Profile } from './pages/profile.jsx';
import { Chats } from './pages/chats.jsx';
import { useSelector } from 'react-redux';
import { getChats } from './redux/selectors/getChats-selector';

function App() {

  const chats = useSelector(getChats);

  return (

    <div className="App">

      <BrowserRouter>
        <header className="header">
          <Link to="/" className="main-link">Homepage</Link>
          <Link to="/profile" className="main-link">Profile</Link>
          <Link to="/chats" className="main-link">Chats</Link>
        </header>

        <main>
          <Switch>

            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route exact path="/chats">
              <Chats chats={chats} />
            </Route>

            <Route exact path="/chats/:chatId">
              <div>чат</div>
            </Route>

            <Route>
              <h2 className="nopage">Page not found</h2>
            </Route>

          </Switch>
        </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
