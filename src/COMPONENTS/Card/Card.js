import React, {Component} from 'react';
import Header from "../HEADER/Header";



function Card({user},props){



    let pluss=()=>{

        console.log(props, 222)

    }





    return (

        <div key = {user.id} className="card" style={{width : '18rem',float: 'left',height: '15rem'}}>
            <div className="card-body">
                <h3 className="card-title">{user.name}</h3>
                <h4 className="card-title">{user.address.suite}</h4>
                <h5 className="card-title">{user.address.city}</h5>
                <a  href="#" className="btn btn-primary" onClick={pluss} >Add </a>
                <a href="#" className="btn btn-primary"  >Hide</a>


        </div>
        </div>
    );


}

export default Card;