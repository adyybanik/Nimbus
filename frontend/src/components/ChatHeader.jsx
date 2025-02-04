import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  function getInitials(fullName) {
    if (!fullName) return "?";
  
    // Split on whitespace and remove any empty entries
    const parts = fullName.split(" ").filter(Boolean);
    
    // Get first character of each part, uppercase it, and join
    const initials = parts.map(namePart => namePart[0]?.toUpperCase()).join("");
  
    return initials || "?";
  }

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          {selectedUser.profilePic ? (
                <img
                    src={selectedUser.profilePic}
                    alt={selectedUser.name}
                    className="size-12 object-cover rounded-full"
                />
                ) : (
                <div className="avatar placeholder size-12">
                    <div className="bg-neutral text-neutral-content w-full h-full flex items-center object-cover justify-center rounded-full">
                    <span className="text-s">
                        {getInitials(selectedUser?.fullName)}
                    </span>
                    </div>
                </div>
            )}

          {/* User info */}
          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)}>
          <X />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;