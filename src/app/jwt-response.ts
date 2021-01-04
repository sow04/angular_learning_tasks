export interface JwtResponse {
    user: {
        id: number,
        username: string,
       
        access_token: string,
        expires_in: number
    }
}
