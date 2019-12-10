import { UserType } from "./userType";

export interface IUser{
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    userType: UserType
}