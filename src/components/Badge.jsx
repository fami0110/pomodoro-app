import { useContext } from 'preact/hooks';
import AppContext from "@/AppContext";
import Focus from '@/icons/Focus';
import Break from '@/icons/Break';
import Timer from '@/icons/Timer';

export default function Badge() {
    // console.log('Badge render');

    const { status } = useContext(AppContext);
    const displayStatus = status.charAt(0).toUpperCase() + status.slice(1);

    return (
        <div className="badge badge-neutral bg-base-300 badge-outline py-5 px-3 mx-auto pointer-none">
            {status == "focus" ? <Focus color="var(--color-base-content)" className="w-[30px] h-[30px]" /> : 
            status == "break" ? <Break color="var(--color-base-content)" className="w-[28px] h-[28px]" /> : 
                                <Timer color="var(--color-base-content)" className="w-[24px] h-[24px]" />}
            <span className="text-lg font-semibold">{displayStatus}</span>
        </div>
    );
}