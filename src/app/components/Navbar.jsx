import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex justify-between w-1/2">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/services">
            <li>Service</li>
          </Link>

          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
