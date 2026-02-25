import { X } from "lucide-react";
import EditUser from "./EditUser";

const UserPopup = ({ state, onClose, fetchUserList }) => {
    const { popUpType, data } = state;

    const deleteUser = async () => {
        const config = {
            method: "DELETE"
        }
        await fetch(`http://localhost:5001/users/${data.id}`, config);
        fetchUserList();
        alert("User Deleted successfully");
        onClose({ type: "reset" })
    }

    return (
        <div className="fixed bg-black/30 w-full h-screen z-40 flex justify-center items-center top-0 left-0">
            <div className="w-full max-w-xl  bg-white text-slate-950">
                <div className="flex justify-end">
                    <button onClick={() => onClose({ type: "reset" })} className="cursor-pointer p-2">
                        <X className="w-4 h-4 text-slate-950" />
                    </button>
                </div>
                <div className="p-8">
                    {
                        popUpType === "view" ?
                            <div>View</div>
                            : popUpType === "edit" ?
                                <EditUser data={data} fetchUserList={fetchUserList} onClose={onClose} />
                                : <div>
                                    <p>Do you want to delete this user?</p>
                                    <div className="flex items-center justify-end gap-3">
                                        <button onClick={deleteUser}>Yes</button>
                                        <button onClick={() => onClose({ type: "reset" })}>No</button>
                                    </div>
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserPopup