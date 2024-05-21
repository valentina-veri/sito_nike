export class RegisterDTO {
    constructor(
        public email: string = "",
        public password: string = "",
        public name: string = "") { }
}

export class LoginDTO {
    constructor(
        public email: string = "",
        public password: string = "") { }
}

export type User = {
    id: number,
    name: string,
    user:string
}

export type LoggedUser={
    accessToken:string,
    user:User
}

