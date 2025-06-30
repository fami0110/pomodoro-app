// import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from '@tauri-apps/api/window';
// import { PhysicalSize } from '@tauri-apps/api/window';

export default function TitleBar() {
	// console.log('TitleBar render');
	
	const actionHandle = async (type) => {
		try {
			if (type === "minimize") {
				await getCurrentWindow().minimize();
			} else if (type === "close") {
				await getCurrentWindow().close();
			} else {
				throw new Error("Invalid action type");
			}
		} catch (error) {
			console.error("Window action error:", error);
		}
	};

	return (
		<header className="p-3 flex justify-end border-t-10 border-b-3 border-b-base-300 bg-base-200 rounded-t-2xl box-content" data-tauri-drag-region>
			<div className="flex-1 pointer-events-none"></div>

			<button className="grid place-items-center mx-3" id="minimize-btn" onClick={() => actionHandle("minimize")}>
				<svg className="fill-current" width="14" viewBox="0 0 29 6" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.36444 5.76099C2.56291 5.76099 1.88184 5.4805 1.32124 4.91954C0.760279 4.35858 0.479797 3.67751 0.479797 2.87634C0.479797 2.07481 0.760279 1.39356 1.32124 0.8326C1.88184 0.271999 2.56291 -0.00830078 3.36444 -0.00830078H25.1353C25.9369 -0.00830078 26.6179 0.271999 27.1785 0.8326C27.7395 1.39356 28.02 2.07481 28.02 2.87634C28.02 3.67751 27.7395 4.35858 27.1785 4.91954C26.6179 5.4805 25.9369 5.76099 25.1353 5.76099H3.36444Z" />
				</svg>
			</button>

			<button className="grid place-items-center mx-3" id="close-btn" onClick={() => actionHandle("close")}>
				<svg className="fill-current" width="13" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.8234 17.5454L4.56477 26.8035C4.0712 27.2974 3.45977 27.5444 2.73048 27.5444C2.00118 27.5444 1.38975 27.2974 0.896183 26.8035C0.402284 26.31 0.155334 25.6985 0.155334 24.9692C0.155334 24.2399 0.402284 23.6285 0.896183 23.1349L10.1543 13.8763L0.896183 4.61769C0.402284 4.12412 0.155334 3.51269 0.155334 2.78339C0.155334 2.0541 0.402284 1.44267 0.896183 0.949102C1.38975 0.455203 2.00118 0.208252 2.73048 0.208252C3.45977 0.208252 4.0712 0.455203 4.56477 0.949102L13.8234 10.2072L23.082 0.949102C23.5756 0.455203 24.187 0.208252 24.9163 0.208252C25.6456 0.208252 26.257 0.455203 26.7506 0.949102C27.2445 1.44267 27.4915 2.0541 27.4915 2.78339C27.4915 3.51269 27.2445 4.12412 26.7506 4.61769L17.4925 13.8763L26.7506 23.1349C27.2445 23.6285 27.4915 24.2399 27.4915 24.9692C27.4915 25.6985 27.2445 26.31 26.7506 26.8035C26.257 27.2974 25.6456 27.5444 24.9163 27.5444C24.187 27.5444 23.5756 27.2974 23.082 26.8035L13.8234 17.5454Z" />
				</svg>
			</button>
		</header>
	);
}
