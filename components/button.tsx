
export default function Button ({ buttonType, onClick }: { buttonType: string, onClick: () => void}) {
  const addBtn = "bg-blue-400";
  const delBtn = "bg-red-500 w-8 items-center";
  const completedBtn = "bg-green-500";
  
  let buttonClass = "";
  if (buttonType === "addBtn") {
    buttonClass = addBtn;
  } else if (buttonType === "delBtn") {
    buttonClass = delBtn;
  } else if (buttonType === "completeBtn") {
    buttonClass = completedBtn;
  }

  return(
    <button className={`h-full rounded-md px-8 text-white text-4xl ${buttonClass}`} onClick={onClick}>
      +
    </button>
  );
} 
