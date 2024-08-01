import Link from "next/link";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/account">Your Account</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
