import axios from "axios"
import { IUser, LoginFormDto, LoginResponseDto, RegisterFormDto, RegisterResponseDto, User } from "./dto/auth.dto"
import { destroyCookie } from "nookies"
import { API_URL } from './index';

export const loginUser = async (values: LoginFormDto): Promise<IUser> => {
    const {data} = await axios.post(API_URL + '/auth/login', values)
    return data
}
export const registerUser = async (values: RegisterFormDto): Promise<IUser> => {
    const {data} = await axios.post(API_URL + '/auth/register', values)
    return data
}
export const logout = () => {
    destroyCookie(null, '_token', { path: "/" })
    destroyCookie(null, '_user', { path: "/" })
}

export const authMe = async (): Promise<User> => {
    const {data} = await axios.get('/users/me') 
    return data    
}
