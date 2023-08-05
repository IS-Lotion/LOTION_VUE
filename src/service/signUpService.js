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
    checkDuplicateEmail(email) {
        return new Promise((resolve, reject) => {
            axiosApi
                .post('/checkDuplicateEmail', email)
                .then((res) => {
                    console.log('check email okay')
                    resolve(res)
                })
                .catch((err) => {
                    console.log('check email error')
                    reject(err)
                })
        })
    }
}
