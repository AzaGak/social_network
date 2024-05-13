import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "825f065c-32a8-4f91-beea-7deb70104ba2",
    },
});

const userAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then((responce) => responce.data);
    },

    // getProfile(userId) {
    //     console.warn("Obsolote method: Please use profileAPI object");
    //     return profileAPI.getProfile(userId);
    // },

    setUnfollow(id) {
        return instance
            .delete(`follow/${id}`)
            .then((responce) => responce.data);
    },

    setFollow(id) {
        return instance.post(`follow/${id}`).then((responce) => responce.data);
    },
};

const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then((responce) => responce.data);
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then((responce) => responce.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
};

const authAPI = {
    getMe() {
        return instance.get(`auth/me`).then((responce) => responce.data);
    },
};

export { userAPI, authAPI, profileAPI };
