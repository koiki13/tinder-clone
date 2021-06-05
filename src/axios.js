import axios from "axios";

const appAxios = axios.create({
    baseURL: "https://clonedtinder.herokuapp.com"
})

export default appAxios;