import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  updateProfile,
  loadUser,
} from "../../redux/actions/userActions";


import {
  clearErrors,
  updateReset,
} from "../../redux/slices/userSlice";


import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";


const UpdateProfile = () => {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [avatar, setAvatar] = useState("");

  const [avatarPreview, setAvatarPreview] =
    useState("/images/images.png");


  const dispatch = useDispatch();

  const navigate = useNavigate();

 
  const {
    user,
    error,
    isUpdated,
    loading,
  } = useSelector(
    (state) => state.user
  );


  useEffect(() => {


    if (user) {

      setName(user.name);

      setEmail(user.email);


      setAvatarPreview(
        user.avatar?.url || "/images/images.png"
      );

    }


    if (error) {

      toast.error(error);

      dispatch(clearErrors());

    }


    if (isUpdated) {

      toast.success(
        "Profile updated successfully"
      );


      dispatch(loadUser());


      navigate("/users/me");


      dispatch(updateReset());

    }


  }, [
    dispatch,
    error,
    isUpdated,
    navigate,
    user,
  ]);



  const submitHandler = (e) => {

    e.preventDefault();


    dispatch(
      updateProfile({
        name,
        email,
        avatar,
      })
    );

  };



  const onChange = (e) => {

    const file = e.target.files[0];


    const reader = new FileReader();


    reader.onload = () => {


      if (reader.readyState === 2) {


        setAvatarPreview(reader.result);


        setAvatar(reader.result);


      }

    };


    if (file) {

      reader.readAsDataURL(file);

    }

  };



  return (

    <>

      <div className="row wrapper">

        <div className="col-10 col-lg-5 updateprofile">


          <form
            className="shadow-lg"
            onSubmit={submitHandler}
          >

            <h1 className="mt-2 mb-5">
              Update Profile
            </h1>



            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>




            <div className="form-group">

              <label>Email</label>


              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>



            <div className="form-group">


              <label>Avatar</label>


              <div className="d-flex align-items-center">


                <figure className="avatar mr-3">


                  <img
                    src={avatarPreview}
                    className="rounded-circle"
                    alt="Avatar"
                  />


                </figure>


                <input
                  type="file"
                  accept="image/*"
                  onChange={onChange}
                />


              </div>


            </div>



            <button
              type="submit"
              className="btn btn-block py-3"
              disabled={loading}
            >

              UPDATE

            </button>


          </form>


        </div>

      </div>

    </>

  );

};


export default UpdateProfile;