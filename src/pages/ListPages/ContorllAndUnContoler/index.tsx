import React, { useRef } from "react";
import { Input, Button  } from "antd";
const Controll = () => {
    const inputRef = useRef(null)
    
    return (
        <div>
            <Input 
            placeholder="请输入"
            ref={inputRef}
            />
        </div>
    )
}

export default Controll;