import pinCo from './PinCo'
import Pinned from "./pinButton";
import Un from "./Un";
import React, { Component, useState } from 'react';
 const Pin = ({btn,pinn}) =>  {
      
        const [isLoggedIn, setisLoggedIn] = useState(true)
        const [pin, setPin] = useState(10)
   const p = pin;
  
    function handleLoginClick() {
      setisLoggedIn(true);
      // this.setState(this.state.pin + 1);
      // const a = this.state.pin;
    setPin(pin + 1)
    }
  
    function handleLogoutClick() {
      setisLoggedIn(false);
      setPin(pin - 1)
    }
        const i= isLoggedIn;
        let button;
        
        i ? button = <Pinned onClick={handleLogoutClick} /> 
          : button = <Un onClick={handleLoginClick} />;
        
       
        return (
            <div>
             
              {button}
            </div>
        );
        }

        export default Pin;
       
    

