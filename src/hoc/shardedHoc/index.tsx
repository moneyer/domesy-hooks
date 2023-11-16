import React, {useEffect, useState} from 'react';
import { Button } from 'antd';
import img from '../img.png'
import  HOC, { reStart } from './hoc'


// 子组件
const Child:React.FC<{name: string, waitRender: () => void}>  = ({name, waitRender}) => {

  useEffect(() => {
    console.log('============Child  effect')
    waitRender()
  }, [])

  console.log('============Child==render')

  return (
    <div>
      <img src={img} width={160} height={120} alt="" />{name}
    </div>
  )
}

const Item = HOC(Child)
interface IItem {
  name: string
}
const Index:React.FC<any> = ()=> {
  const aList: IItem [] = [{ name: '图片1'}, { name: '图片2' }, { name: '图片3' }]
  const [list, setList] = useState<any>(aList)

  const clickHandler = () => {
    const newList = list.length > 0 ? [] : aList
    reStart()
    setList(newList)
  }

  return (
    <div>
      <Button color="primary" onClick={clickHandler}>重新加载</Button>
      {
        list.map((item: IItem) =>   <Item name={item.name} key={item.name} />)
      }
    </div>
  );
}

export default Index;
