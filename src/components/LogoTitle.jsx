export default function LogoTitle({ width = 160, textClassName = "text-2xl" }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <img src="./Logo.png" width={width} className="pointer-events-none" alt="logo" />
            <p className={"font-medium " + textClassName}>Pomodoro Timer</p>
        </div>
    );
}