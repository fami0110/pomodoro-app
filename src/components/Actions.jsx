import { useContext, useState } from "preact/hooks";
import AppContext from "@/AppContext";
import ModalSettings from "@/components/ModalSettings";
import Pause from "@/icons/Pause";
import Play from "@/icons/Play";
import Stop from "@/icons/Stop";
import Dots from "@/icons/Dots";

export default function Actions() {
	// console.log('Actions render');
	
    const {isPlay, setIsPlay, changeLayout} = useContext(AppContext);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="flex justify-center items-center gap-4 mt-3">
				<button className="btn btn-secondary shadow-none border-0 border-b-6 active:border-b-0 transition-all cursor-pointer w-[60px] h-[50px]"
					onClick={() => setIsOpen(true)}>
					<Dots color="var(--color-base-content)" />
				</button>

				<button 
					className="btn btn-primary rounded-2xl shadow-none border-0 border-b-6 active:border-b-0 transition-all cursor-pointer w-[80px] h-[80px]" 
					onClick={() => setIsPlay(currentState => !currentState)}
				>
					{isPlay ? <Pause color="var(--color-base-200)" /> : <Play color="var(--color-base-200)" />}
				</button>

				<button className="btn btn-secondary shadow-none border-0 border-b-6 active:border-b-0 transition-all cursor-pointer w-[60px] h-[50px]"
					onClick={() => changeLayout('result')}>
					<Stop color="var(--color-base-content)" />
				</button>
			</div>
			
			<ModalSettings open={isOpen} onClose={() => setIsOpen(false)} />
		</>
	);
}
