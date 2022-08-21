
import './App.css';
/* import { Messages } from './components/messages/Messages';
import { Form } from './components/form/Form'; */
/* import { AUTHOR, BOT } from './constants/constants'; */
/* import CssBaseline from '@mui/material/CssBaseline';
import { List, ListItem } from '@mui/material'; */
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage.jsx';
import { Profile } from './pages/profile.jsx';
import { Chats } from './pages/chats.jsx';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';


function App() {

  /* const [chats, setChats] = useState([]); */

  /* useEffect(() => {
    setChats()
  }, []); */


  return (
    <Provider store={store}>

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
                <Chats />
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

    </Provider>
  );
}

export default App;
