import { ReactNode } from "react"
import { ImageSourcePropType } from "react-native/types"

export interface PremiumInformationCardProps{
    data:DataCardProps
}

export interface DataCardProps{
    icon:ImageSourcePropType,
    text:string,
    text2:string
}

export interface RadioButtonProps{
    selectedNumber:number
    text1:string
    text2:string
    discount:boolean
}