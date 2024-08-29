"use client";

import { useEffect, useState } from "react";
import { verifyMobileAPI, verifyMobileOtpAPI } from '../../Services/allAPI'
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import styles from '../verification.module.css'
import { useRouter } from 'next/navigation';

function page() {
    const [otp, setOtp] = useState('')

    const phone = useSelector((state: RootState) => state.user.phone);
    const router = useRouter()
    const verifyMobile = async () => {
        console.log('logged');
        
        const reqBody = {phone }
        try {
            const response = await verifyMobileAPI(reqBody);
            console.log(response);
            // if(response.status==200){
            //     alert(response.message)

            // }
            // else{
            //     alert('Something went Wrong')
            // }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (phone) {
            verifyMobile();
        }
    }, []);

    const verifyOtp = async() => {
        const reqBody = {phone,otp}
        console.log('clicked otp');
       try{
           const {response} = await verifyMobileOtpAPI(reqBody);
           console.log(response);
        //    if(response.status==200){
        //     alert(response.data.message)
        //     // router.push('/modules/VerifyEmail')
        //    }
        //    else{
        //     alert(response.data.message)
        //    }
        //    alert(response.data)
       }
       catch(error){
           console.log(error);
           alert('An error occured')
       } 
   }


    return (
        <div>
            <div className={styles.container}>
                <h1>Phone Number Verification</h1>
                <p>
                    A verification code has been sent to your phone: <strong>{phone}</strong>
                </p>

                <div className={styles.verification}>
                    <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    <button onClick={() => verifyOtp()}> Verify Phone </button>

                </div>

                <div className={styles.resend}>
                    <p>Didn&apos;t get OTP?</p>
                    <button onClick={() => verifyMobile()}> Resend OTP </button>
                </div>
                
            </div>
        </div>
    )
}

export default page