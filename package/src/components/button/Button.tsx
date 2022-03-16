import React, { FC } from 'react'

import './style.css'

import {ButtonProps} from "./types"


const Button: FC<ButtonProps> = ({size, primary, disabled, text, outline, onClick}) => {

    const sizeSwitcher = (size?: string) => {
        switch(size) {
            
            case "small": return "12px 30px 14px"; 
            case "medium": return "14px 30px 16px";
            case "large": return "16px 30px 20px";
            default : return "14px 30px 16px";
        }
    }

    const buttonColor = primary ? "teal" : "#1b116e";

    const buttonStyle = {
        backgroundColor: outline ? "transparent" : buttonColor,
        opacity: disabled ? 0.3 : 1,
        cursor: disabled ? "default" : "pointer",
        padding: sizeSwitcher(size),
        border: outline ? `solid 2px ${buttonColor}` : "none",
        color: outline ? buttonColor : "white"
    }


    return (
        <button className='button' type="button" style={buttonStyle} onClick={onClick} disabled={disabled}>
            {text || "Save"}
        </button>
    )
}

export default Button;