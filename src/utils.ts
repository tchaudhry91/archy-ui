import Cookies from 'universal-cookie';
import jwt from 'jwt-decode';

export function isLoggedIn(): boolean {
    try {
    const cookies = new Cookies();
    const tokenStr = cookies.get('token');
    const token: any = jwt(tokenStr)
    if (token.user === undefined) {
        return false
    }
    return true
    }
    catch(err) {
        return false
    }
}

export function getLoggedInUser(): string {
    try{
        const cookies = new Cookies();
        const token: any = jwt(cookies.get("token"))
        return token.user as string;
    }
    catch(err) {
        console.log(`Failed to get loggedInUser: {err}`)
    }
    throw new Error("Shouldn't be reachable")
}

export function logout() {
    const cookies = new Cookies();
    cookies.remove("token")
}