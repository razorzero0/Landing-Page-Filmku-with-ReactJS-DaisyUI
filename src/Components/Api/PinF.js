import PinCo from './PinCo'
import Pinned from "./pinButton";
import Un from "./Un";
import React, { Component, useState } from 'react';
 const Pinf = ({btn,pinn}) =>  {
      
        const [isLoggedIn, setisLoggedIn] = useState(true)
        const [pin, setPin] = useState(0)
   
  
    function handleLoginClick() {
      setisLoggedIn(true);
      // this.setState(this.state.pin + 1);
      // const a = this.state.pin;
     console.log(this.state.pin);
    <PinCo pin={this.state.pin}/>
    }
  
    function handleLogoutClick() {
      setisLoggedIn(false);
    }
        const i= isLoggedIn;
        let button;
        
        i ? button = <Pinned onClick={handleLogoutClick} /> 
          : button = <Un onClick={handleLoginClick} />;
        
       
        return (
            <div>
          <PinCo pin={pin}/>
            </div>
        );
        }

        export default Pinf
    

