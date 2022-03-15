//import { getSession } from 'next-auth/client';
import UserProfile from '../components/profile/user-profile';
import jsCookie from 'js-cookie';
import AuthPage from './auth';

function ProfilePage() {
  const getToken = jsCookie.get('token');

  if (getToken) {
    return <UserProfile />;
  } else {
    return <AuthPage />;
  }
}




export default ProfilePage;
