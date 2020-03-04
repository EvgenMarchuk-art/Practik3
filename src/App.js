import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./COMPONENTS/HEADER/Header";
import Card from "./COMPONENTS/Card/Card";
import Basket from "./COMPONENTS/Basket/Basket";





class App extends  Component{


    constructor(props) {
        super(props)



    };

    state = {
        basket:0,
    data:null,
    user:"VASYA",

  };






  componentDidMount() {

    setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( respons =>respons.json() )
        .then( result=>{
          console.log(result)
          this.setState({data:result})


        })},1000)
  }





    SortButtonName=()=> {

        this.setState({data:this.state.data.sort((a,b)=>{
                if (a.name < b.name) {
                    return -1
                }
                if (a.name < b.name) {
                    return 1
                }
            })
        });

    };

    SortButtonCity=()=>{
       this.setState({data:this.state.data.sort((a,b)=>{
               if (a.address.city < b.address.city) {
                   return -1
               }
               if (a.address.city < b.address.city) {
                   return 1
               }
           })
       });
    };


 refreshPage(){
    this.setState({data:window.location.reload()})
 };

 plus1=()=>{
     this.setState({basket: this.state.basket+1})

 }





  render(){
    const{data}=this.state




      return (
        <div className="App">


              <Header bask={this.state.basket} myHendler={this.SortButtonName} myHendler1={this.SortButtonCity} myHendler2={this.refreshPage}/>
          {
            data ? data.map(i => {
                  return <Card  user={i} key={i.id} plusOne={this.plus1}/>
                })
                : "Loading"

          }


            </div>
            )

  }

}



export default App;
