import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader";

const Profile = () => {

  const { user, loading } = useSelector((state) => state.user);


  if (loading) {
    return <Loader />;
  }


  if (!user) {
    return null;
  }


  return (

    <div className="user-info">

      <div className="profile">


        <div className="text-center">


          <figure className="avatar-profile mx-auto">

            <img
              src={user.avatar?.url}
              alt={user.name}
            />

          </figure>


          <span>
            Welcome {user.name}!
          </span>


        </div>


        <Link
          to="/users/me/update"
          id="edit_profile"
          className="btn btn-primary btn-block my-5"
        >

          Edit Profile

        </Link>


        <h4>Full Name</h4>

        <p>{user.name}</p>


        <h4>Email Address</h4>

        <p>{user.email}</p>


        <h4>Joined On</h4>

        <p>
          {String(user.createdAt).substring(0,10)}
        </p>


      </div>

    </div>

  );
};


export default Profile;