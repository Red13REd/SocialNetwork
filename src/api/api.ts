import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "c41dfb07-1a75-4e09-a63a-c913ed8979ad"
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