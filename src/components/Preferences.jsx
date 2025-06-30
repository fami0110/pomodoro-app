import AppContext from "@/AppContext";
import { useContext, useEffect } from "preact/hooks";

export default function Preferences({ timeSet = true }) {
	// console.log('Preferences render');

	const { 
        timeFocus, setTimeFocus, 
        timeBreak, setTimeBreak, 
        enableSound, setEnableSound, 
        enableNotification, setEnableNotification 
    } = useContext(AppContext);

	useEffect(() => {
		localStorage.setItem("pomodoro-preferences", JSON.stringify({
            timeFocus,
            timeBreak,
            enableSound,
            enableNotification,
		}));
	}, [timeFocus, timeBreak, enableSound, enableNotification]);

	return (
		<div className="w-full flex flex-col gap-4 text-xl">
			{timeSet ? (
				<>
					<div className="form-control">
						<label className="font-medium">Focus times</label>
						<input
							type="number"
							className="input border-neutral rounded-xl bg-transparent font-medium text-lg py-5"
							value={timeFocus}
							onChange={(e) => setTimeFocus(parseInt(e.target.value) || 0)}
							min="0"
							max="99"
						/>
					</div>

					<div className="form-control">
						<label className="font-medium">Break times</label>
						<input
							type="number"
							className="input border-neutral rounded-xl bg-transparent font-medium text-lg py-5"
							value={timeBreak}
							onChange={(e) => setTimeBreak(parseInt(e.target.value) || 0)}
							min="0"
							max="99"
						/>
					</div>
				</>
			) : (<></>)}

			<div className="form-control">
				<label className="font-medium">Sfx</label>
				<input type="checkbox" className="toggle toggle-lg" checked={enableSound} onChange={(e) => setEnableSound(e.target.checked)} />
			</div>

			<div className="form-control">
				<label className="font-medium">Notification</label>
				<input type="checkbox" className="toggle toggle-lg" checked={enableNotification} onChange={(e) => setEnableNotification(e.target.checked)} />
			</div>
		</div>
	);
}
