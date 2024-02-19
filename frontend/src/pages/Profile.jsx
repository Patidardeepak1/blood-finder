import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateUserFilure, updateUserSucess, updateUserStart, deleteUserFilure, deleteUserStart, deleteUserSucess, signoutUserFilure, signoutUserSucess, signoutUserStart } from "../redux/user/userSlice";
import {server} from './constant.js'
function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData({
      username: currentUser.username,
      email: currentUser.email,
      password: "", // If you don't want to show or edit the password, keep it empty
      bloodgroup: currentUser.bloodgroup,
      state: currentUser.state,
      city: currentUser.city,
      mobile: currentUser.mobile
    });
  }, [currentUser]);

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`${server}/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFilure(data.message));
      }
      dispatch(updateUserSucess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFilure(error.message));
    }
  };

  const handleDelete = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`${server}/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFilure(data.message));
        return;
      }
      dispatch(deleteUserSucess(data));
    } catch (error) {
      dispatch(deleteUserFilure(error.message));
    }
  };

  const handelSiginout = async () => {
    try {
      dispatch(signoutUserStart());
      const res = await fetch(`${server}/api/auth/signout`);
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutUserFilure(data.message));
        return;
      }
      dispatch(signoutUserSucess(data));
    } catch (error) {
      dispatch(signoutUserFilure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto bg-red-100 rounded-lg mt-4">
     <h1 className="text-3xl font-semibold text-center my-7 font-serif">PROFILE</h1>

      <form onSubmit={handelSubmit} className="flex flex-col gap-4">
        <label htmlFor="username" className="text-gray-700">Username</label>
        <input
          type="text"
          value={formData.username}
          placeholder="Enter your username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handelChange}
        />
        <label htmlFor="email" className="text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          placeholder="Enter your email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handelChange}
        />
        <label htmlFor="password" className="text-gray-700">Password</label>
        <input
          type="password"
          value={formData.password}
          placeholder="Enter your password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handelChange}
        />
        <label htmlFor="bloodgroup" className="text-gray-700">Blood Group</label>
        <input
          type="text"
          value={formData.bloodgroup}
          placeholder="Enter your blood group"
          id="bloodgroup"
          className="border p-3 rounded-lg"
          onChange={handelChange}
        />
        <label htmlFor="state" className="text-gray-700">State</label>
        <input
          type="text"
          value={formData.state}
          placeholder="Enter your state"
          id="state"
          className="border p-3 rounded-lg"
          onChange={handelChange}
        />
        <label htmlFor="city" className="text-gray-700">City</label>
        <input
          type="text"
          value={formData.city}
          placeholder="Enter your city"
          id="city"
          className="border p-3 rounded-lg"
          onChange={handelChange}
        />
        <label htmlFor="mobile" className="text-gray-700">Mobile No.</label>
        <input
          type="text"
          value={formData.mobile}
          placeholder="Enter your mobile number"
          id="mobile"
          className="border p-3 rounded-lg"
          onChange={handelChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
         {loading?'loading...':'update'}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span onClick={handleDelete} className="text-red-700 cursor-pointer ">Delete account</span>
        <span onClick={handelSiginout} className="text-red-700 cursor-pointer ">Sign out</span>
      </div>
      <p className="text-red-700 mt-3">{error ? error : ''}</p>
      <p className="text-green-700 mt-3">{updateSuccess ? 'User is updated successfully' : ''}</p>
    </div>
  );
}

export default Profile;
