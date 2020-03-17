import React, { useEffect, useState } from 'react';
import api from '../api';

function Stream() {
    const [channels, setChannels] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/streams")
            let dataArray = result.data.data;
            // console.log(dataArray)
            let gameIDs = dataArray.map(stream => {
                return stream.game_id;
            });
            // console.log(gameIDs)
            let baseURL = "https://api.twitch.tv/helix/games?";
            let queryParams = "";
            gameIDs.map(id => {
                return (queryParams = queryParams + `id=${id}&`);
            });
            let finalURL = baseURL + queryParams;
            // console.log(finalURL);
            let gameNames = await api.get(finalURL);
            let gameNameArray = gameNames.data.data;

            let finalArray = dataArray.map(stream => {
                stream.gameName = ''
                gameNameArray.map(name => {
                    if(stream.game_id === name.id) {
                        return stream.gameName = name.name
                    }
                })
            })
        }
        fetchData();
    });
    return <div>streams component</div>
}

export default Stream;