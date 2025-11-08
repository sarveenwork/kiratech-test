import axios from 'axios'

export async function getUser() {
    const userResponse = await axios.get(`${process.env.VUE_APP_API_URL}?results=20`);
    return userResponse;

}

