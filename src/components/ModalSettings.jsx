import Preferences from "./Preferences";

export default function ModalSettings({ open, onClose }) {
    // console.log('ModalSettings render');

	return (
		<div onClick={onClose} 
            className={`fixed p-3 inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/25" : "invisible"}`}>
			<div onClick={(e) => e.stopPropagation()} 
                className={`bg-base-200 rounded-2xl transition-all w-full border-2 border-base-300 overflow-hidden 
                    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>

                {/* Modal Header */}
                <div className="w-full px-3 py-1 flex justify-between items-center border-b-2 border-b-base-300">
                    <div className="flex-1">
                        <h1 className="text-xl font-semibold">Settings</h1>
                    </div>
                    <button className="btn btn-circle btn-ghost" onClick={onClose}>✕</button>
                </div>

                {/* Modal Body */}
                <div className="w-full p-5 bg-base-100 bg-strips">
                    <Preferences timeSet={false} />
                </div>
            </div>
		</div>
        
	);
}
