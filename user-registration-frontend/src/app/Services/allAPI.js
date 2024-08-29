import {serverURL} from './serverURL'
import { commonAPI } from './commonAPI'

//register user
export const registerAPI = async(user) => {
    return await commonAPI("post",`${serverURL}/register`,user,"")
}

//verify-email
export const verifyEmailAPI = async(email) => {
    return await commonAPI("post",`${serverURL}/verify-emaill`,email,"")
}

//verify-otp-email
export const verifyOtpAPI = async(body) => {
    return await commonAPI("post",`${serverURL}/verify-otp`,body,"")
}

//verify-phone
export const verifyMobileAPI = async(phone) => {
    return await commonAPI("post",`${serverURL}/verify-phone`,phone,"")
}

//verify-otp-phone
export const verifyMobileOtpAPI = async(body) => {
    return await commonAPI("post",`${serverURL}/verify-otp-phone`,body,"")
}

//login
export const loginAPI = async(body) => {
    return await commonAPI("post",`${serverURL}/login`,body,"")
}