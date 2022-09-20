import React, { useState } from 'react';
import Axios from 'axios';
import './Form.css';


function PostApiForm() {
    const url = "https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec";
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }
    const [data, setData] = useState({
        cle: "CLE-TEST-IOT",
        id: "",
        date: "",
        urlRelais: "",
        message: ""
    });
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            cle: data.cle,
            donnees: {
                id: data.id,
                date: data.date,
                urlRelais: data.urlRelais,
                message: data.message
            }
        }, {
            headers: headers
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <form class="s-mp flex vertical m-auto" onSubmit={(e)=> submit(e)}>
                <input onChange={(e)=>handle(e)} id="id" value={data.id} placeholder="id" type="text"></input>
                <input onChange={(e)=>handle(e)} id="date" value={data.date} placeholder="date" type="date"></input>
                <input onChange={(e)=>handle(e)} id="urlRelais" value={data.urlRelais} placeholder="urlRelais" type="text"></input>
                <textarea onChange={(e)=>handle(e)} id="message" value={data.message} placeholder="message" type="text"></textarea>
                <button>Post to Ouivalo API !</button>
            </form>
        </div>
    );
}

export default PostApiForm;