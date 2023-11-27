export interface IUser {
    id: number
    email: string
    token: string
}

export interface IUserData {
    email: string,
    password: string
}

export interface IResponseUser {
    email: string
    id: number
    createDate: string
    updateDate: string
    password: string
}

export interface IResponseUserData {
    token: string
    user: IResponseUser
}