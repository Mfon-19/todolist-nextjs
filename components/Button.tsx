import { GoPlus } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import { PiTrashLight } from "react-icons/pi";

export default function Button({ buttonType, onClick }: { buttonType: string; onClick: () => void }) {
  if (buttonType === "addBtn") {
    return (
      <button className="h-full rounded-xl px-4 text-white text-4xl bg-blue-400 flex items-center justify-center hover:outline-2 hover:outline-black hover:bg-blue-500" onClick={onClick}>
        <GoPlus />
      </button>
    );
  } else if (buttonType === "delBtn") {
    return (
      <button className="h-full rounded-xl px-4 text-white text-4xl bg-red-500 flex items-center justify-center hover:outline-2 hover:outline-black hover:bg-red-600" onClick={onClick}>
        <PiTrashLight />
      </button>
    );
  }

  return (
    <button className="h-full rounded-xl px-4 text-white text-4xl bg-green-500 flex items-center justify-center hover:outline-2 hover:outline-black hover:bg-green-600" onClick={onClick}>
      <IoCheckmark />
    </button>
  );
}
