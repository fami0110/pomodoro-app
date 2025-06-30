import Badge from "@/components/Badge";
import Clock from "@/components/Clock";
import Actions from "@/components/Actions";
import Progress from "@/components/Progress";

export default function MainLayout() {
	// console.log('MainLayout render');
	
	return (
		<div className="w-full h-full flex flex-col justify-between">
			<div className="flex-1 flex flex-col justify-center items-center gap-[2rem]">
				<Badge />
				<Clock />
				<Actions />
			</div>
			<Progress />
		</div>
	);
}
