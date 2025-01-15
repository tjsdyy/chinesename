import { UserInfo } from "@/types/user";

export default function Header({ user }: { user?: UserInfo }) {
  return (
    <div
      className="fixed z-10 h-14 w-full border-b bg-white bg-opacity-60 first-letter:shadow-sm"
      style={{
        backdropFilter: "saturate(50%) contrast(2) blur(5px)",
      }}
    >
      <header className="flex justify-between items-center w-full mt-1 border-b-1 pb-0 sm:px-4 px-2">

      </header>
    </div>
  );
}
