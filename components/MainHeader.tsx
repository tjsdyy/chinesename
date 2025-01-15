import Link from "next/link";

export default function MainHeader() {
  return (
    <Link href="/" className="flex space-x-3">
      <span className="sm:text-4xl text-2xl ml-2 tracking-tight font-extralight flex items-center">
        Chinese Name Generator
      </span>
    </Link>
  );
}
