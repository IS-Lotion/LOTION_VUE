import { axiosApi } from "@/api";

export default {
    registerUser(userData) {
        return new Promise((resolve, reject) => {
            axiosApi
                .post('/signUp', userData)
                .then((res) => {
                    console.log('signUp service okay')
                    resolve(res)
                })
                .catch((err) => {
                    console.log('signUp service error')
                    reject(err)
                })
        })
    },
    checkDuplicateId(userId) {
        return new Promise((resolve, reject) => {
            axiosApi
                .post('/checkDuplicateId', userId)
                .then((res) => {
                    console.log('check userId okay')
                    resolve(res)
                })
                .catch((err) => {
                    console.log('check userId error')
                    reject(err)
                })
        })
    }
}
