//import { getSession } from 'next-auth/client';
import ProfileForm from '../../components/profile/profile-form';
import jsCookie from 'js-cookie';
import AuthPage from '../auth';

function ProfilePage() {
  const getToken = jsCookie.get('token');

  if (getToken) {
    return <ProfileForm />;
  } else {
    return <AuthPage />;
  }
}

export default ProfilePage;