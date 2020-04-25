import Cookies from 'universal-cookie';
import jwt from 'jwt-decode';

const baseURL = "https://archy.tux-sudo.com"

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
    catch (err) {
        return false
    }
}

export function getLoggedInUser(): string {
    try {
        const cookies = new Cookies();
        const token: any = jwt(cookies.get("token"))
        return token.user as string;
    }
    catch (err) {
        console.log(`Failed to get loggedInUser: {err}`)
    }
    throw new Error("Shouldn't be reachable")
}

export function logout() {
    const cookies = new Cookies();
    cookies.remove("token")
}

export async function getToken(user: string, password: string): Promise<string> {
    try {
        const resp = await fetch(baseURL.concat("/token"), {
            method: "POST",
            body: JSON.stringify({ user: user, password: password })
        })
        if (resp.status !== 200) {
            throw new Error("Login returned status:" + resp.status)
        }
        const data = await resp.json()
        return data.token as string;
    }
    catch (err) {
        throw new Error(err)
    }
}