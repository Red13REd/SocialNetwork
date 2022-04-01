import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "4b1b8a71-d75f-4f42-8e70-f2ca2c6751b4"
    }
})

export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
}

export const authApi = {
    authMe() {
        return instance.get(`auth/me`)
    },
}


export const profileApi = {
    getProfile(id: string) {
        return instance.get(`profile/${id}`)
    },
}


export const followApi = {
    followDelete(id: string) {
        return instance.delete(`follow/${id}`)
    },
    followPost(id: string) {
        return instance.post(`follow/${id}`, {},)
    },
}