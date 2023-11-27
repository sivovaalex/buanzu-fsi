import { instance } from '../api/axios.api';
import { IUserData, IResponseUserData, IUser } from './../types/types';

export const AuthService = {
    async registartion(userData: IUserData): Promise<IResponseUserData | undefined> {
        const {data} = await instance.post<IResponseUserData>('user/registration', userData)
        return data
    },
    async login(userData: IUserData): Promise<IUser | undefined> {
        const {data} = await instance.post<IUser>('auth/login', userData)
        return data
    },
    async getProfile(): Promise<IUser | undefined> {
        const {data} = await instance.get<IUser>('auth/profile')
        if (data) return data
    },
}