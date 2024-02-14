import { Dispatch, SetStateAction } from "react"

export type TTodo = {
    _id?: string,
    title: string,
    description: string,
    status: boolean,
    priority: string
}

export type TPriority = { 
    priority: string, 
    setPriority: Dispatch<SetStateAction<string>>
 }