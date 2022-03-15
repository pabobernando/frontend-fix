import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ProfilePic from '../../public/assets/avatar.png'
import axios from 'axios';




axios.get('http://localhost:3001/userGames/me').then(resp => {
console.log(resp.data);
});

function ProfilePage() {
  return (
    <div className="container">
  <div className="row ">

    <div className="col-6">
    <div className="container pt-5 pb-5">
  <div className="row ">

    <div className="col-md-4 border border-dark p-3">
<Image src={ProfilePic}  width={100}  height={100} />
    </div>

    <div className="col-md-8 border border-dark p-3">
      
<h2>USERNAME</h2>
<p>Full Name</p>
<button><Link href="profile/edit">
          <a>Edit Profile</a>
        </Link></button>
    </div>

  </div>
</div>
    </div>

    <div className="col-12 border border-dark pt-1 pb-1"> 

    <div className="col-8 ">
<p>Experience</p>
<p>Level</p>
<p>Total Score</p>
    </div>
    </div>

  </div>
</div>
  );
}

export default ProfilePage;