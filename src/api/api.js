import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "e24dc5af-8371-4da6-927f-55bbe569d740"}
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    postFollow (id) {
        return instance.post(`follow/${id}`) /*${u_id = 0} это заглушки под фоллоу запрос*/
            .then(response => {
                return response.data;
            });
    },
    deleteUnfollow (currentPage = 1, pageSize = 10) {
        return instance.delete(`follow/0`) /*${u_id = 0} это заглушки под фоллоу запрос*/
            .then(response => {
                return response.data;
            });
    }
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return axios.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}

