import axios from 'axios'

let api = axios.create({
    headers: {
        'Client-ID': 'bg52ay22xn5tgo3apso9bjtub0fbn2'
    }
})

export default api;