import { Button, Spin } from 'antd';
import React, { useState } from 'react';
import img from '../img.png'


const HOC = (Component: any) => {
  return function HOC(props: any) {

    const [show, setShow] = useState<boolean>(false)

    return <div>
      <Button color="primary" onClick={() => setShow(v => !v)}>加载图片</Button>
      {show ? <Component {...props} /> : <div style={{ margin: 25 }}><Spin size="small" />加载中</div>}
    </div>
  }
}

const Index: React.FC<any> = ({ }) => {
  return (
    <div>
      <img src={img} width={160} height={120} alt="" />
    </div>
  );
}

export default HOC(Index);
