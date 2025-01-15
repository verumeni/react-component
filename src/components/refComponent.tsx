import { Button, Input } from "@chakra-ui/react";
import { useRef } from "react"

/**
 * 非制御コンポーネントRef
 * @returns 
 */
export const RefComponent = () => {
    const ref = useRef<string>('');
    const setValue = (val: string) => ref.current = val;
    
    //フォームの値を変更してもレンダリングが発生しない。値はRefオブジェクトに格納
    console.log('RefComponent Render!!')
    return (
        <div>
            <b>非制御コンポーネント（Ref）：</b>
            <Input type={'text'} onChange={(e) => setValue(e.target.value ?? '')} width={200} />
            <Button onClick={() => console.log(ref.current)}>出力</Button>
        </div>
    )
}