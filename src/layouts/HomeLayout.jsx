import AppContext from "@/AppContext";
import { useContext, useEffect } from "preact/hooks";
import Preferences from "@/components/Preferences";
import LogoTitle from "@/components/LogoTitle";
import Play from "@/icons/Play";

export default function HomeLayout() {
	// console.log('HomeLayout render');

	const { setCurrentTimes, setClock, changeLayout, setStat } = useContext(AppContext);

	const handleOnSubmit = (e) => {
        e.preventDefault();
		setCurrentTimes(5); setClock(5);
		changeLayout('main');
    };

	return (
		<div className="w-full h-full flex flex-col justify-center items-center gap-[2rem]">
			<LogoTitle />
            
			<form className="flex flex-col w-full px-6 gap-[2rem]" onSubmit={handleOnSubmit}>
				<Preferences />

                <button type="submit" className="btn btn-neutral py-3 shadow-none rounded-2xl border-0 border-b-5 active:border-b-0 transition-all border-b-secondary box-content">
                    <Play className="w-[24px]" color="var(--color-base-200)" />
                </button>
			</form>
		</div>
	);
}
