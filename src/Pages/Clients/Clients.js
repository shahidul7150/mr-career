import React, { useEffect, useState } from 'react';
import Client from '../Client/Client';
import './Clients.css'
const Clients = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch('clients.json')
            .then(res => res.json())
        .then(data=>setClients(data))
},[])
    return (
        <div id='clients'>
            <h2>My Satisfying Clients</h2>
            <div className='clients-container'>
            {
                clients.map(client=><Client key={client.id} client={client}></Client>)
            }
           </div>
        </div>
    );
};

export default Clients;