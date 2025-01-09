import {IUser} from "./IUser.ts";

export interface IBaseResponseModelUsers {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}
