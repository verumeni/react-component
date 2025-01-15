import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react"

/**
 * 制御コンポーネント
 * @returns 
 */
export const ControlComponent = () => {
    const [value, setValue] = useState<string>('');

    //setValueを実行する度にコンポーネント全体のレンダリングが発生
    console.log('ControlComponent Render!!');

    return (
        <div>
            <b>制御コンポーネント：</b>
            <Input type={'text'} value={value} onChange={(e) => setValue(e.target.value)} width={200} />
        </div>
    )
}