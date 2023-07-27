import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "195edf1e498847979af4572e397834ce"
    }
})




