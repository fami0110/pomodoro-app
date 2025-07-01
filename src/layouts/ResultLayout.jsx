import AppContext from "@/AppContext";
import { useState, useEffect, useContext } from "preact/hooks";
import LogoTitle from "@/components/LogoTitle";
import Home from "@/icons/Home";

export default function ResultLayout() {
    // console.log('ResultLayout render');
    
    const { 
        changeLayout, currentPage,
        setCurrentTimes, setClock,
        stat
    } = useContext(AppContext);
    
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (currentPage == 'result') {
            const encouragementMessages = [
                "Keep it up, learner!",
                "Great job!",
                "You did it!",
                "You crushed it!",
                "Way to go!",
                "You're on your way!",
                "You're building great habits!",
                "Progress over perfection!",
                "Keep learning!",
                "Stay focused!",
                "Well done, learner!",
                "AmbatuLearn...😩",
                "POV: You just leveled up your productivity",
                "I LOVE CATSS😻😻",
                "Distraction? Never heard of her. Good job!",
                "Go touch grass (after your break ofc).",
                "You dropped this 👑",
                "The true RIZZlerr!",
                "Blud got 1000++ aura😱",
            ];
    
            setMessage(
                encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)]
            );
        }
    }, [currentPage]);


    const handlePlayAgain = () => {
        setCurrentTimes(5); setClock(5);
        changeLayout('main');
    }

    const minutes = Math.floor(stat.timePassed / 60);

	return (
		<div className="w-full h-full flex flex-col justify-center items-center gap-[2rem] px-6">
            <LogoTitle />

			<div className="flex bg-base-200 border-secondary border-2 rounded-xl w-full relative mt-6">
                <span className="inline-block absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-100%] bg-secondary text-base-100 px-4 py-1 rounded-t-xl font-bold">
                    It's Over!
                </span>

				<div className="px-5 py-3 flex flex-col justify-evenly items-center w-[33%]">
					<h3 className="font-extrabold text-3xl">{minutes > 99 ? ":)" : minutes}</h3>
					<p className="text-sm text-center">Minutes</p>
				</div>

				<div className="px-5 py-3 flex flex-col justify-evenly items-center w-[33%] border-s-2 border-e-2 border-dashed border-secondary">
					<h3 className="font-extrabold text-3xl">{stat.focusSession}<span className="font-normal">x</span></h3>
					<p className="text-sm text-center">Focus Session</p>
				</div>

				<div className="px-5 py-3 flex flex-col justify-evenly items-center w-[33%]">
					<h3 className="font-extrabold text-3xl">{stat.breakSession}<span className="font-normal">x</span></h3>
					<p className="text-sm text-center">Break</p>
				</div>
			</div>

            <div className="flex flex-col gap-y-1">
                <svg class="w-5 mx-auto text-primary opacity-80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <p className="font-semibold text-secondary italic text-center">"{message}"</p>
            </div>

			<div className="flex items-end w-full h-[60px] gap-3">
				<button className="py-7 flex-1 btn btn-neutral shadow-none border-0 border-b-5 active:border-b-0 rounded-2xl border-secondary font-bold text-base-200 text-xl"
                 onClick={handlePlayAgain}>
                    Start Again
                </button>
				<button className="py-7 btn bg-base-100 shadow-none border-3 border-b-5 active:border-b-3 rounded-2xl border-secondary w-[65px]"
                    onClick={() => changeLayout('home')}>
                    <Home className='w-6' color="var(--color-secondary)" />
                </button>
			</div>
		</div>
	);
}
