import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import jsCookie from "js-cookie";

function ProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      const token = jsCookie.get("token");

      const myToken = axios.create({
        baseURL: "http://localhost:3001",
        timeout: 100000,
        headers: { Authorization: "Bearer " + token },
      });

      const response = await myToken.get("/userGames/me");
      setUser(response.data);
    }
    fetchData();
  }, []);

  // gambar;
  const [image, setImage] = useState("https://fakeimg.pl/250x100/");

  function handleUploadChange(e) {
    const uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
  }

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 text-center">
          <div className="container pt-5 pb-5">
            <div className="row ">
              <div className="col-md-12 p-1">
                <Image
                  src={image}
                  className="img-thumbnail rounded-circle"
                  width={200}
                  height={150}
                />
              </div>
              <div className="col-md-12 bg-secondary text-center">
                <h2>{user.userName}</h2>
                <p>{user._id}</p>
                <button type="button" className="btn btn-primary">
                  <Link href="profile/edit">
                    <a className="text-decoration-none text-light">
                      Edit Profile
                    </a>
                  </Link>
                </button>
              </div>
              <div className="col-4 text-center">
                <label htmlFor="formfile" className="form-label">
                  Upload Image Here
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="formFile"
                  onChange={handleUploadChange}
                  accept="image/*"
                />
                <button type="button" className="btn btn-dark mt-1">
                  Save my Photo
                </button>
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
