/**
 * Created by LXY on 2017/4/21.
 */
module.exports = {
    setToken(loginManage) {
        // sessionStorage.token=loginManage.token;
        sessionStorage.token=loginManage.token;
    },

    getToken() {
        return sessionStorage.token
    },

    logout() {
        // delete sessionStorage.token
        delete sessionStorage.token;
    },


}
