import axios from 'axios'

let api = axios.create({
    headers: {
        'Client-ID': 'ej4x47hmkwz59qkkzk1nkcsokdk3de'
    }
})

export default api;

// process.env.REACT_APP_CLIENT_ID="ej4x47hmkwz59qkkzk1nkcsokdk3de"