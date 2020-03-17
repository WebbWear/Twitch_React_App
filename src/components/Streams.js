import React, { useEffect, useState } from 'react';
import api from '../api';

function Stream() {
    const [channels, setChannels] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('https://api.twitch.tv/helix/streams')
            let dataArray = result.data.data 
            console.log(dataArray)
        }
        fetchData()
    })
    return <div>streams component</div>
}

export default Stream;