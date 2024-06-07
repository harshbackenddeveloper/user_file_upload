import axios from "axios";
import { userlocalStorageData } from "./UserToken";
export const makeApi = async (req, url, body) => {

    const userToken = userlocalStorageData().userToken

    const previousUrl = "https://sharelink.clientdemobot.com/api"
    var config = {
        method: req,
        url: previousUrl + url,
        data: body,
        headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'multipart/form-data',
            access_control_allow_origin: "*"
        }
    };
    try {
        const response = await axios(config);
        if (response.data.error && response.data.error.error_code === 403) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("User_Role");
            window.open('http://localhost:3000/');
            return;
        } else {
            return response.data;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}