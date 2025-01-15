import { CallbackComponent, UseCallbackComponent } from "./components/callbackComponent";
import { ControlComponent } from "./components/controlComponent";
import { ParentComponent, ParentPropsComponent } from "./components/parentComponent";
import { RefComponent } from "./components/refComponent";

export const RenderTest = () => {
    return (
        <>
            {/** 制御コントロール */}            
            <ControlComponent />
            {/** 非制御コントロール　Ref使用 */}
            <RefComponent />
            {/** 親子コンポーネント */}
            <ParentComponent />
            {/** 親子コンポーネント props渡し */}
            <ParentPropsComponent />
            {/** useCallback未使用コンポーネント */}
            <CallbackComponent />
            {/** useCallback使用コンポーネント */}
            <UseCallbackComponent />
        </>
    );
}