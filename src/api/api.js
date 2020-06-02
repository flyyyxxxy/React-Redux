import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd9e87a25-87ba-4a5c-95ce-1060974359b9'
    }
})

export const usersApi = {
    getUsers (currentPage,pageSize){
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then(response => response.data)
    },


    deleteFollow(userId){
        return instance.delete(`follow/` + userId,).then(response=> response.data)
    },

    postFollow(userId){
        return instance.post(`follow/` + userId, {}).then(response=>response.data)
    },

    getProfile(userId){
        return instance.get(`profile/` +userId).then(response=>response.data)
    },
   

    getAuthInfo(){
        return instance.get(`auth/me`,)
        .then(response=>response.data);
    }
}

export const ProfileApi = {
    getStatus(userId){
        return instance.get(`profile/status/` +userId )
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status}).then(response=>response.data)
    }
}



