"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store'; 
import { setUserDetails } from '../../Redux/userSlice';
import Image from 'next/image';
import styles from './register.module.css';
import icon from '../../../../public/Images/bank-icon.svg';
import {registerAPI} from '../../Services/allAPI'
import { useRouter } from 'next/navigation';


function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    aadhar: "",
    password:""
  });

  const dispatch = useDispatch();
  const router = useRouter()
  const userReduxState = useSelector((state: RootState) => state.user);

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
    dispatch(setUserDetails(formData));
    try {
      const result = await registerAPI(formData);
      console.log(result);
      if(result.status==200){
        alert('Registration Success')
        router.push('/VerifyEmail')
      }
      else{
        alert(result.response.data)
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    
  };

  return (
    <div>
      <div className={styles.container}>
        <Image src={icon} alt='icon' width={34} height={34} />
        <div className={styles.inputFields}>
          <form onSubmit={handleSubmit} className={styles.formContent}>
            <label className={styles.fieldName} htmlFor="name">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

            <label className={styles.fieldName} htmlFor="email">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />

            <label className={styles.fieldName} htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />

            <label className={styles.fieldName} htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />

            <label className={styles.fieldName} htmlFor="aadhar">Aadhar No</label>
            <input type="text" name="aadhar" value={formData.aadhar} onChange={handleInputChange} />

            <label className={styles.fieldName} htmlFor="password">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />

            <button className={styles.submitButton} type='submit'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
