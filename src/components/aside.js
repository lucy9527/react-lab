import { useContext,useState,useMemo,useRef , useCallback } from "react";
import {MyContext} from '../pages/home'

const Aside = () =>{
    // 哥肤浅了，原来还有这么多用法
    // http://www.ptbird.cn/react-createContex-useContext.html#menu_index_8
    const aside = useRef('initial')
    console.log(aside);
    const myUse = useContext(MyContext)
    console.log('useContext' , myUse);
    const [tip , setTip] = useState(1)
    const computeExpensiveValue = (oldV) => {
        console.log('carry');
        return oldV
    }
    //useCallback(fn，inputs) 等效 useMemo(() => fn，inputs)
    const memoizedValue = useMemo(() => computeExpensiveValue(tip), [tip]);

    const changNum = useCallback(() => {
        console.log('执行');
    } , [])
    changNum()
    return (<div ref={aside} onClick={() => setTip(tip + 1)}>asides<span>{memoizedValue}</span></div>)
}

export default Aside