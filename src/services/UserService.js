import axios from "axios";

const apiUrl = `${import.meta.env.VITE_APP_API_BASE_URL_USER}/users`
const apiUrl2 = `${import.meta.env.VITE_APP_API_BASE_URL_USER2}/post`
/**
 * Obtine la informacion
 * @returns {Promise<any>}
 */
const getData = async () => {
    try {
        const res = await axios.get(apiUrl);
        return await res.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

/**
 * Envia la información
 * @param {Object} data
 * @returns {Promise<number>}
 */
const saveData = async ({data}) => {
    try {
        const res = await axios.post(apiUrl2, data);
        return res.status;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export default {
    getData,
    saveData
}