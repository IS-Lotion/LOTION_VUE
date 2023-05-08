import { axiosApi } from "@/api";

export default {
    userLogin(userInfo) {
        return new Promise((resolve, reject) => {
            axiosApi
                .post('/login', userInfo)
                .then((res) => {
                    console.log('login service okay')
                    resolve(res)
                })
                .catch((err) => {
                    console.log('login service errer')
                    reject(err)
                })
        })
    }
}