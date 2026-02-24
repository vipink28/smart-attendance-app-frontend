import { X } from "lucide-react";
import EditUser from "./EditUser";

const UserPopup = ({ state, onClose }) => {
    const { popUpType, data } = state;
    return (
        <div className="fixed bg-black/30 w-full h-screen z-40 flex justify-center items-center top-0 left-0">
            <div className="w-full max-w-xl p-8 bg-white text-slate-950">
                <div className="flex justify-end">
                    <button onClick={() => onClose({ type: "reset" })} className="cursor-pointer p-2">
                        <X className="w-4 h-4 text-slate-950" />
                    </button>
                </div>
                {
                    popUpType === "view" ?
                        <div>View</div>
                        : popUpType === "edit" ?
                            <EditUser data={data} />
                            : <div>Delete</div>
                }
            </div>
        </div>
    )
}

export default UserPopup