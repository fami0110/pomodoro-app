import { useState, useEffect, useRef } from "preact/hooks";
import { animated, useSpring } from "@react-spring/web";
import AppContext from "@/AppContext";
import TitleBar from "./components/TitleBar";
import HomeLayout from "@/layouts/HomeLayout";
import MainLayout from "@/layouts/MainLayout";
import ResultLayout from "@/layouts/ResultLayout";
import "@/styles/index.css";
import "@/styles/customThemes.css";

const savedPreferences = localStorage.getItem('pomodoro-preferences');
const preferences = JSON.parse(savedPreferences) || {
	timeFocus : 25,
	timeBreak : 5,
	enableSound : true,
	enableNotification : true,
};

export const StatTemplate = {
	timePassed: 0,
	focusSession: 0,
	breakSession: 0
}

function App() {
	// console.log('App render');
	const [currentPage, setCurrentPage] = useState('home');
	const [status, setStatus] = useState("standby");
	const [isPlay, setIsPlay] = useState(false);
	const [clock, setClock] = useState(0);
	const [currentTimes, setCurrentTimes] = useState(0);
	const [timeFocus, setTimeFocus] = useState(preferences.timeFocus);
	const [timeBreak, setTimeBreak] = useState(preferences.timeBreak);
	const [enableSound, setEnableSound] = useState(preferences.enableSound);
	const [enableNotification, setEnableNotification] = useState(preferences.enableNotification);
	const [stat, setStat] = useState(StatTemplate);
	const transitionSfx = useRef(null);

	useEffect(() => {
		transitionSfx.current = new Audio('./audio/transition.mp3');
		transitionSfx.current.volume = 0.5;
	}, []);


	const [styles, api] = useSpring(() => ({
        opacity: 1,
        transform: 'translate3d(0,0px,0)'
    }));

	const changeLayout = (nextPage) => {
		setIsPlay(false);

		setTimeout(() => {
			if (enableSound) 
				transitionSfx.current.play();
			
			api.start({
				opacity: 0,
				transform: 'translate3d(0, 50px, 0)',
				config: { tension: 180, friction: 15 },
				onRest: ({ finished }) => {
					if (finished) {
						let nextTheme = "";
		
						if (nextPage === "home" || nextPage === "result") {
							nextTheme = "standby";
						} else {
							nextTheme = "start";
							setStat(StatTemplate);
							setTimeout(() => setIsPlay(true), 100);
						}
		
						setStatus(nextTheme);
						setCurrentPage(nextPage);
		
						api.start({
							opacity: 1,
							transform: 'translate3d(0, 0px, 0)',
							config: { tension: 180, friction: 15 }
						});
					}
				}
			});
		}, 10);
	}

	return (
		<AppContext.Provider value={{ 
			currentPage, setCurrentPage,
			status, setStatus,
			isPlay, setIsPlay,
			clock, setClock,
			currentTimes, setCurrentTimes,
			timeFocus, setTimeFocus,
			timeBreak, setTimeBreak,
			enableSound, setEnableSound,
			enableNotification, setEnableNotification,
			stat, setStat,
			changeLayout
		}}>
			<div className="bg-strips flex flex-col justify-between rounded-2xl overflow-hidden w-full h-[100vh]" data-theme={status}>
				<TitleBar />

				<animated.div className="flex-1 w-full" style={styles}>
					{
						(currentPage === "home") ? <HomeLayout /> : 
						(currentPage === "main") ? <MainLayout /> :
						<ResultLayout />
					}
				</animated.div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
