import { useEffect, useState } from 'react';
import { Spin } from 'antd';

const waitList: any = [] //等待队列
let isRender: boolean = false //控制渲染条件

const waitRender = () => {
  const res = waitList.shift()
  console.log('============waitRender--isRender', isRender, res);
  if (!res) return
  setTimeout(() => {
    res()
  }, 300)
}

export const reStart = () => {
  isRender = false
}

const HOC = (Component: any) => {

  return function HOC(props: any) {

    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
      console.log('====================hoc effect', 'show', show, 'isRender', isRender);
      // isRender = false
      waitList.push(() => { setShow(true) })
      if (!isRender) {
        waitRender()
        isRender = true
      }
    }, [])
    console.log('====================hoc effect===render', 'show', show, 'isRender', isRender);
    return show ? <Component waitRender={waitRender} {...props} /> : <div style={{ margin: 25 }}><Spin size="small" />加载中</div>
  }
}

export default HOC;
