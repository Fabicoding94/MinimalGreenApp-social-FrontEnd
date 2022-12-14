export interface AuthResponse {

    token: string,
    id:number,
    username:string,
    email: string
    type:string,
    roles:string[],
    expirationTime:Date

  }
