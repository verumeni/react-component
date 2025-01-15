import { Button } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

export const ParentComponent = () => {
    const [count, setCount] = useState<number>(0);

    //親コンポーネントのstateが変更されることで子コンポーネントもレンダリングされてしまう
    console.log('Parent Render!!');

    return (
        <div>
            <b>親子コンポーネント（親のレンダリング）</b>
            <Button onClick={() => setCount(i => i + 1)}>レンダリング!!</Button>
            <ChildComponent />
        </div>
    )
}

export const ParentPropsComponent = () => {
    return (
        <PropsComponent>
            <ChildComponent />
        </PropsComponent>
    );
}
export const PropsComponent = ({children}: {children: React.ReactNode}) => {
    const [count, setCount] = useState<number>(0);

    //親コンポーネントのstateが変更されることがpropsで渡された子コンポーネントはレンダリング対象とはならない
    console.log('Parent Render!!');

    return (
        <div>
            <b>親子コンポーネント（子をPropsで受け渡し）</b>
            <Button onClick={() => setCount(i => i + 1)}>レンダリング!!</Button>
            {children}
        </div>
    )
}

const ChildComponent = () => {
    console.log('Child Render!!')

    return <span>子コンポーネント</span>
}