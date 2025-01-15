import { Button } from "@chakra-ui/react"
import React, { useCallback, useState } from "react"

export const CallbackComponent = () => {
    const [count, setCount] = useState<number>(0);
    console.log('CallbackComponent Render!')

    const handleClick = () => {
        console.log('Push!!')
        setCount(i => i + 1);
        //メモ化したコンポーネントに渡す関数がレンダリング時に生成されるためstateが更新されるたびに新しい関数が生成されメモ化の意味がない
    }

    return (
        <div>
            <b>useCallback未使用時</b>
            <ButtonComponent handleClick={handleClick} />
        </div>
    )
}

export const UseCallbackComponent = () => {
    const [count, setCount] = useState<number>(0);
    console.log('CallbackComponent Render!')

    const handleClick = useCallback(() => {
        console.log('Push!!')
        setCount(i => i + 1);
        //useCallbackによって関数をキャッシュ化することで関数の再生成を防ぐ
    }, [])

    return (
        <div>
            <b>useCallback使用時</b>
            <ButtonComponent handleClick={handleClick} />
        </div>
    )
}

const ButtonComponent = React.memo(({handleClick}: {handleClick: () => void}) => {
    console.log('Button Render!');
    return (
        <Button onClick={handleClick}>Push</Button>
    )
})