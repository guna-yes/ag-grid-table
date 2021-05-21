import React, { Component } from 'react'



export default function BtnCellRenderer(props) {
    return (
        <div>
        {console.log(props)}
            <button onClick={()=>alert("deleted")}><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1432400-1211078.png" style={{ height:"25px",width:"25px"}}></img></button>
        </div>
    )
}
