import React from "react";
import Tilt from 'react-parallax-tilt';

const Logo = () =>{
    return(
        <div className = "ma4 mt0 dib v-mid">
            <Tilt className="br2 shadow-2 dib v-mid" options={{ max : 55 }} style={{ height: 150, width: 150 }}>
            <div className="pa3 dib v-mid">
                🥩
            </div>
        </Tilt>
        </div>
    )
}

export default Logo;