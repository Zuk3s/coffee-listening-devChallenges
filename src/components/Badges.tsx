import IBadgeProps from "../Types/IBadge";

export default function Badges({ children, isActive, onClick }: IBadgeProps) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-lg transition delay-75 duration-150 ease-in ${
        isActive ? "bg-gray-200" : "bg-transparent"
      }`}
    >
      {children}
    </button>
  );
}
