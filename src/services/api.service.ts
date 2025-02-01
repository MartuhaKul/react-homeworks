const BaseUrl = 'https://jsonplaceholder.typicode.com';

// const userService = {
//     getAllUsers: async (): Promise<IUser[]> => {
//         const users = await fetch(BaseUrl + '/users')
//             .then(value => value.json());
//         console.log(users);
//         return users;
//
//
//     }
// }
// const userService = {}
// const userService = {}

export const getAll = async<T> (endpoint: string) => {
    const responseResult = await fetch(`${BaseUrl}${endpoint}`)
                .then((response:Response) => response.json());
    return responseResult as T;

}