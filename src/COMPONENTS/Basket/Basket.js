import React,{Component} from 'react';
import './Basket.css'


class Basket extends Component {
    constructor(props) {
        super(props);
    }


    render() {




        return (
            <div className="Basket">

                <h1 > {this.props.bask}</h1>

            </div>
        );
    }
}

export default Basket;