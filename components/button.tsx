
export default function Button ({ buttonType }: { buttonType: string}) {
  const addBtn = "bg-blue-400";
  const delBtn = "bg-r"
  return(
    <button className={`h-full rounded-md px-8 bg-red-500 text-white text-4xl${addBtn}`}>
      +
    </button>
  );
} 
