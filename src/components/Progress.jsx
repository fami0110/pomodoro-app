import AppContext from "@/AppContext";
import { useContext } from "preact/hooks";

export default function Progress() {
    // console.log('Progress render')

    const { clock, currentTimes } = useContext(AppContext);

    return (
        <div className="bg-base-200 w-full h-[8px]">
            <div className="bg-neutral h-full"
                style={{ 
                    width: `${((clock/currentTimes) * 100).toFixed(2)}%`,
                    transition: 'width 1s linear',
                }}>
            </div>
        </div>
    );
}