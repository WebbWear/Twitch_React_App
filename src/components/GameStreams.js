import React, { useState, useEffect } from 'react';
import api from '../api';

function GameStreams({ match, location }) {
    const [streamData, setStreamData] = useState([]);
    const [viewers, setViewers] = useState(0);

    useEffect(() => {
       const fetchData = async () => {
           const result = await api.get(
               `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
           );
           let dataArray = result.data.data
           let finalArray = dataArray.map(stream => {
            let newURL = stream.thumbnail_url
            .replace("{width}", "300")
            .replace("{height}", "300");
            stream.thumbnail_url = newURL;
            return stream
           });
           let totalViewers = finalArray.reduce((acc, val) => {
               return acc + val.viewer_count;
           }, 0);
           setViewers(totalViewers)
           setStreamData(finalArray)
       }
       fetchData()
    }, [location.state.gameID]);
    return (
        <div>
            <h1 className="text-center">{match.params.id} Streams</h1>
            <h3 className="text-center">
                <strong className="text-primary">{viewers} people watching {match.params.id}</strong>
            </h3>
            <div className='row'>
                {streamData.map(stream => (
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
                        <div className="card">
                            <img className="card-img-top" src={stream.thumbnail_url} alt="Games" />
                            <div className="card-body">
                                <h3 className="card-title">{stream.user_name}</h3>
                                <h5 className="card-title">{stream.gameName}</h5>
                                <button className="btn btn-success">
                                    <a
                                        className="link"
                                        href={"https://twitch.tv/" + stream.user_name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Watch {stream.user_name}'s channel
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                 ))}                
            </div>
        </div>
    );
}

export default GameStreams;