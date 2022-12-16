import React  from "react";

import { Button, Result } from 'antd';


export default function AboutPage()
{
    return(
        <Result
        status="success"
        title="Nothing About Me!"

        extra={[
          <Button key="" href="/">Back To HomePage</Button>,
        ]}
      />
    );
    
}

