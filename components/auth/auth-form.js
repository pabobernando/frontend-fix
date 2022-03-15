import { useState, useRef } from 'react';
import classes from './auth-form.module.css';
import { useRouter } from 'next/router';
import jsCookie from 'js-cookie';
//import axios from 'axios';

async function createUser(email, password) {
  const response = await fetch('http://localhost:3001/userGames/add', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
  return data;
}

async function login(email, password) {
  const response = await fetch('http://localhost:3001/userGames/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
  return data;
}

// tes jika menggunakan axios
// async function createUser(email, password) {
//   try {
//     const response = await axios.post(
//       'http://localhost:3000/userGames/add',
//       {
//         email,
//         password,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     console.log(response);
//   } catch (error) {
//     alert('Network error');
//   }
// }

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // validation optional

    if (isLogin) {
      // log user in

      try {
        const result = await login(enteredEmail, enteredPassword);
        if (!result.error) {
          router.replace('/profile');
          jsCookie.set('token', result.token);
        } else {
          console.log('gagal login');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      //sign up
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
        if (!result.error) {
          router.replace('/');
        } else {
          console.log('gagal daftar');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
