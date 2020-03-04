import React from 'react';
import Basket from "../Basket/Basket";



function Header(props) {


    console.log(props)

    let SortButtonName = () => {
        props.myHendler()
        console.log(props);
    };

    let SortButtonCity = () => {
        props.myHendler1()

    };

    let refresh = () => {
        props.myHendler2()

    };



        return (
            <nav className="navbar navbar-dark bg-primary">
                <h1>Header</h1>
                <Basket bask ={props.bask}/>
                <a href="#" className="btn btn-primary " onClick={refresh}>Refresh Page</a>
                <a href="#" className="btn btn-primary" onClick={SortButtonCity}>By City</a>
                <a href="#" className="btn btn-primary " onClick={SortButtonName}>By Name</a>

            </nav>
        );
    }


export default Header;