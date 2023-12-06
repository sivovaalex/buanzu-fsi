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
    icon_path:  string,
    body_background:  string,
    lead_name:  string,
    lead_name_color:  string,
    lead_subtitle:  string,
    lead_subtitle_color:  string,
    lead_photo_path:  string,
    name_color:  string,
    text_color:  string,
    about_name:  string,
    about_text:  string,
    about_photo_path:  string,
    client_name:  string,
    client_list:  string,
    photo_name:  string,
    gallery_list_path:  string,
    plus_name:  string,
    plus_list:  string,
    plan_name:  string,
    plan_list:  string,
    button_name:  string,
    button_list:  string,
    contact_name:  string,
    contact_text:  string,
    phone_number:  string,
    vk:  string,
    tg:  string,
    mail:  string,
    address_name:  string,
    address:  string,
    map_link:  string,

    createDate: string,
    updateDate: string
}


export interface ILandingId {
    id_landing: number,

    title: string,
    site_name: string,
    icon_path:  string,
    body_background:  string,
    lead_name:  string,
    lead_name_color:  string,
    lead_subtitle:  string,
    lead_subtitle_color:  string,
    lead_photo_path:  string,
    name_color:  string,
    text_color:  string,
    about_name:  string,
    about_text:  string,
    about_photo_path:  string,
    client_name:  string,
    client_list:  string,
    photo_name:  string,
    gallery_list_path:  string,
    plus_name:  string,
    plus_list:  string,
    plan_name:  string,
    plan_list:  string,
    button_name:  string,
    button_list:  string,
    contact_name:  string,
    contact_text:  string,
    phone_number:  string,
    vk:  string,
    tg:  string,
    mail:  string,
    address_name:  string,
    address:  string,
    map_link:  string,
    
    createDate: string,
    updateDate: string,

    user: {
        id_user: number;
        email: string;
        password: string;
        createDate: string;
        updateDate: string;
      };
}