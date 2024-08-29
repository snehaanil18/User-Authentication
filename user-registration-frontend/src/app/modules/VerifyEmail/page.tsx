"use client";

import { useEffect, useState } from "react";
import { verifyEmailAPI, verifyOtpAPI } from '../../Services/allAPI'
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import styles from '../verification.module.css'

function page() {
    const [otp, setOtp] = useState('')

    const email = useSelector((state: RootState) => state.user.email);

    const verifyEmail = async () => {
        console.log('logged');
        
        const reqBody = { email }
        try {
            const response = await verifyEmailAPI(reqBody);
            console.log(response);
            alert(response.data)
        }
        catch (error) {
            console.log(error);
            alert('An error occured')
        }
    }

    useEffect(() => {
        if(email){
            verifyEmail()
        }
    }, [])

    const verifyOtp = async() => {
        const reqBody = {email,otp}
        console.log('clicked otp');
       try{
           const {response} = await verifyOtpAPI(reqBody);
           console.log(response);
           alert(response.data)
       }
       catch(error){
           console.log(error);
       } 
   }


    return (
        <div>
            <div className={styles.container}>
                <h1>Email Verification</h1>
                <p>
                    A verification code has been sent to your email: <strong>{email}</strong>
                </p>

                <div className={styles.verification}>
                    <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    <button onClick={() => verifyOtp()}> Verify Email </button>
                </div>

                <div className={styles.resend}>
                    <p>Didn&apos;t get OTP?</p>
                    <button onClick={() => verifyEmail()}> Resend OTP </button>
                </div>

            </div>
        </div>
    )
}

export default page