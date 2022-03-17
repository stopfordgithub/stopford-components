import React, {FC} from 'react';
import { Button } from 'stopford-components';
const Main:FC = () => {

    const buttonClick = () => {
        console.log('hello world')
      }
        return (
            <div>
            <Button onClick={buttonClick} size="medium" text="CANCEL" outline={false}  />

            </div>
        )
}


export default Main;