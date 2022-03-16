import React, { useEffect, useState }  from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ProfilePic from '../../public/assets/avatar.png'
import axios from 'axios';
import jsCookie from 'js-cookie';


function ProfilePage() {

  const [user, setUser] = useState({})

  useEffect(() => {
    async function fetchData() {
      const token = jsCookie.get('token')

      const myToken = axios.create({
        baseURL: 'http://localhost:3001',
        timeout: 100000,
        headers: {'Authorization': 'Bearer '+token}
      });
      
      const response = await myToken.get('/userGames/me')
      setUser(response.data)
    }
    fetchData()
  }, [])
  return (
    <div className="container">
  <div className="row ">

    <div className="col-6">
    <div className="container pt-5 pb-5">
  <div className="row ">

    <div className="col-md-4 bg-secondary rounded border border-dark p-3">
<Image src={ProfilePic}  width={100}  height={100} />
    </div>

    <div className="col-md-8 bg-secondary rounded border border-dark p-3">
      
<h2>{ user.userName }</h2>
<p>{ user._id }</p>
<button type="button" className="btn btn-primary"><Link href="profile/edit">
          <a className='text-decoration-none text-light'>Edit Profile</a>
        </Link></button>
        
    </div>

  </div>
</div>
    </div>

    <div className="col-12 border border-dark pt-1 pb-1"> 

    <div className="col-8 ">
<p>Experience : {user.experience}</p>
<p>Level : {user.lvl}</p>
<p>Total Score : {user.totalScore}</p>
    </div>
    </div>

  </div>
</div>
  );
}

export default ProfilePage;