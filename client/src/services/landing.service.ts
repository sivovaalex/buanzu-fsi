import { ILandingId } from './../types/types';
import { instance } from '../api/axios.api'
import { FC, useState } from 'react'

export const landingById = async (id: number) => {
    const {data} = await instance.get<ILandingId>(`/landings/landing/${id}`)
    return data
}