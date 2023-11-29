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

export interface ILanding {
    id_landing: number,
    title: string,
    site_name: string,
    body_background: string,
    createDate: string,
    updateDate: string
}