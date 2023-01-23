import axios from "axios";

const axiosIstance = axios.create({
    baseURL: 'http://localhost:9000',
});

export default axiosIstance;