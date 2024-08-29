"use client";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import styles from '../verification.module.css'
import { useRouter } from 'next/navigation';

function page() {
    const [otp, setOtp] = useState('')

    const aadhar = useSelector((state: RootState) => state.user.aadhar);
    const router = useRouter()

    // const verifyMobile = async () => {
    //     console.log('logged');
        
    //     const reqBody = {phone: `+91 ${phone}` }
    //     try {
    //         const response = await verifyMobileAPI(reqBody);
    //         console.log(response);
    //         // if(response.status==200){
    //         //     alert(response.message)

    //         // }
    //         // else{
    //         //     alert('Something went Wrong')
    //         // }
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     if (phone) {
    //         verifyMobile();
    //     }
    // }, []);

//     const verifyOtp = async() => {
//         const reqBody = {phone: `+91 ${phone}`,otp}
//         console.log('clicked otp');
//        try{
//            const {response} = await verifyMobileOtpAPI(reqBody);
//            console.log(response);
//            if(response.status==200){
//             alert(response.data.message)
//             // router.push('/modules/VerifyEmail')
//            }
//            else{
//             alert(response.data.message)
//            }
//         //    alert(response.data)
//        }
//        catch(error){
//            console.log(error);
//            alert('An error occured')
//        } 
//    }


    return (
        <div>
            <div className={styles.container}>
                <h1>Aadhar Number Verification</h1>
                <p>
                    A verification code has been sent to your phone: <strong>{aadhar}</strong>
                </p>

                <div className={styles.verification}>
                    <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    <button> Verify Aadhar </button>

                </div>

                <div className={styles.resend}>
                    <p>Didn&apos;t get OTP?</p>
                    <button> Resend OTP </button>
                </div>
                
            </div>
        </div>
    )
}

export default page