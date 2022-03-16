import React, {FC} from 'react';
import {Button} from 'stopford-components'
const Main:FC = () => {

    const buttonClick = () => {
        
      }
        return (
            <div>
            <Button onClick={buttonClick} size="small" text='CANCEL' outline={false}  />

            </div>
        )
}


export default Main;