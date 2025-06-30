import AppContext from "@/AppContext";
import { useContext, useEffect, useRef } from "preact/hooks";
import { animated, useSpring } from "@react-spring/web";
import { sendNotification } from '@tauri-apps/plugin-notification';

export default function Clock() {
	// console.log('Clock render');

	const { 
		isPlay, setCurrentTimes,
		clock, setClock,
		status, setStatus, 
		timeFocus, timeBreak,
		stat, setStat,
		enableSound, enableNotification
	} = useContext(AppContext);

	const tickSfx = useRef(null);
	const beebSfx = useRef(null);
	const focusSfx = useRef(null);
	const breakSfx = useRef(null);

	const [ style, api ] = useSpring(() => ({}));
	const intervalRef = useRef(null);

	useEffect(() => {
        tickSfx.current = new Audio('./audio/tick.mp3');
        beebSfx.current = new Audio('./audio/beeb.mp3');
        focusSfx.current = new Audio('./audio/focus.mp3');
        breakSfx.current = new Audio('./audio/break.mp3');

		if (!enableSound) {
			tickSfx.current.volume = 0;
			beebSfx.current.volume = 0;
			focusSfx.current.volume = 0;
			breakSfx.current.volume = 0;
		}
    }, []);

	useEffect(() => {
		let newStat = { ...stat };

		if (clock <= 5 && clock > 0) tickSfx.current.play();

		if (clock === 0) {
			beebSfx.current.play();

			let action, times, notification = null;
			if (status === "focus") {
				times = timeBreak * 60;
				action = "break";
				setTimeout(() => breakSfx.current.play(), 500);
				notification = {title: "🍃 Break Time!", body: `\nRefresh your mind for about ${timeBreak} minutes.`}
			} else if (status === "break" || status === "start") {
				times = timeFocus * 60;
				action = "focus";
				setTimeout(() => focusSfx.current.play(), 500);
				notification = (status === "start") ? 
					{title: "Start Learning! 🚀", body: `\nYour focus time is ${timeFocus} minutes. Goodluck!`} : 
					{title: "Focus Time! 📝", body: "\nThe break session is over. Continue focusing!"}
			} else {
				return null;
			}

			if (status === "focus") {
				newStat.focusSession++;
			} else if (status === "break") {
				newStat.breakSession++;
			}

			if (enableNotification) sendNotification(notification);
			
			setClock(times); setCurrentTimes(times);
			setStatus(action);
		}

		if (status == 'start') return null;

		newStat.timePassed++;
		setStat(newStat);

	}, [clock]);

	useEffect(() => {		
		if (isPlay) {
			intervalRef.current = setInterval(() => {
				setClock(prevClock => prevClock - 1);
			}, 1000);
		} else {
			clearInterval(intervalRef.current);
		}

		api.start({
			to: { 
				fontVariationSettings: isPlay ? 
					"'wght' 700, 'wdth' 110, 'opsz' 14" : 
					"'wght' 400, 'wdth' 110, 'opsz' 14" 
			},
			config: {
				tension: 200,
				friction: 8,
			},
		});
	}, [isPlay]);

	const minutes = Math.floor(clock / 60);
	const seconds = clock % 60;

	return (
		<animated.div
			className="flex flex-col text-base-content text-center timer"
			style={{
				fontFamily: "'RobotoFlex', sans-serif",
				fontSize: "140px",
				lineHeight: "7.5rem",
				transform: "scale(1.1)",
				...style,
			}}
		>
			<span>{String(minutes).padStart(2, "0")}</span>
			<span>{String(seconds).padStart(2, "0")}</span>
		</animated.div>
	);
}
