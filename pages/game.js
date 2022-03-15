import NewGame from '../components/game/newGame';
import jsCookie from 'js-cookie';
import AuthPage from './auth';

function Game() {
  const getToken = jsCookie.get('token');

  if (getToken) {
    return <NewGame />;
  } else {
    return <AuthPage />;
  }
}

export default Game;
