import React from 'react';
import "./Open.css";
import { NavLink } from "react-router-dom";
import laptop from "./laptop.png";
import mobile from './mobile.png';
import earphone from './earphone.png';
import tele from './TV.png';
import tab from './tab.png';


const Option = () =>{
    return(
        <div className="main">
            <div className="mobile">
                    <img src={mobile} style={{height:"60px",width:"50px"}} />
                    <NavLink to="/mobile"><p>Smartphones</p></NavLink>
            </div>
            <div className="earphone">
                    <img src={earphone} style={{height:"60px",width:"50px"}} />
                    <NavLink to="earphone"><p>Earphones</p></NavLink>
            </div>
            <div className="laptop">
                    <img src={laptop} style={{height:"60px",width:"50px"}} />
                    <NavLink to="laptop"><p>Laptop</p></NavLink>
            </div>
            <div className="tab">
                    <img src={tab} style={{height:"60px",width:"50px"}} />
                    <NavLink to="tab"><p>Tablet</p></NavLink>
            </div>
            <div className="tv">
                    <img src={tele} style={{height:"60px",width:"50px"}} />
                    <NavLink to="television"><p>Television</p></NavLink>
            </div>
        </div>
    );
}

export default Option;