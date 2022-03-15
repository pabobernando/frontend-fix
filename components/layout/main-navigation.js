import Link from 'next/link';
import classes from './main-navigation.module.css';
import { useRouter } from 'next/router';
import jsCookie from 'js-cookie';

function MainNavigation() {
  const router = useRouter();
  //logout not working
  async function logoutHandler() {
    const Token = jsCookie.get('token');
    const response = await fetch('http://localhost:3001/userGames/logout', {
      method: 'POST',
      //body: JSON.stringify[{ token: token }],
      headers: {
        authorization: `Bearer ${Token}`,
        'Content-Type': 'application/json',
      },
    });

    jsCookie.remove('token');

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    } else {
      router.replace('/auth');
    }
    return data;
  }

  const getToken = jsCookie.get('token');

  if (getToken) {
    return (
      <header className={classes.header}>
        <Link href="/">
          <a>
            <div className={classes.logo}>Binar Platinum</div>
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/game">Game</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  if (!getToken) {
    return (
      <header className={classes.header}>
        <Link href="/">
          <a>
            <div className={classes.logo}>Binar Platinum</div>
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/auth">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  // return (
  //   <header className={classes.header}>
  //     <Link href="/">
  //       <a>
  //         <div className={classes.logo}>AUTH</div>
  //       </a>
  //     </Link>
  //     <nav>
  //       <ul>
  //         !session && !loading && (
  //           <li>
  //             <Link href="/auth">Login</Link>
  //           </li>
  //         )

  //         {session && (
  //           <li>
  //             <Link href="/profile">Profile</Link>
  //           </li>
  //         )}

  //         {session && (
  //           <li>
  //             <button>Logout</button>
  //           </li>
  //         )}
  //       </ul>
  //     </nav>
  //   </header>
  // );
}

export default MainNavigation;
