"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../Redux/store'; 
// import { setUserDetails } from '../../Redux/userSlice';
import { useRouter } from 'next/navigation';
import { loginAPI } from '@/app/Services/allAPI';
import styles from './login.module.css'

function page() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  // const dispatch = useDispatch();
  // const router = useRouter()
  // const userReduxState = useSelector((state: RootState) => state.user);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isAnyFieldEmpty = Object.values(formData).some(value => value.trim() === '');
    if (isAnyFieldEmpty) {
      alert('Please fill all fields')
      return;
    }
    try {
      const result = await loginAPI(formData);
      console.log(result);
      if(result.status==200){
        alert('Login Success')

      }
      else{
        alert(result.response.data)
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    
  };


  return (
    <div>
      <div className={styles.container}>
        <form action="" className={styles.formContent} onSubmit={handleSubmit}>
          <label className="fieldName" htmlFor="email">Email Address</label>
          <input type="email" name="email" placeholder='eg: john@gmail.com' value={formData.email} onChange={handleInputChange} />

          <label className="fieldName" htmlFor="password">Password</label>
          <input type="password" name="password" placeholder='password' value={formData.password} onChange={handleInputChange} />

          <button className={styles.submitButton} type='submit'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default page