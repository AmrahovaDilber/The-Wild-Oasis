import Link from "next/link";
import Image from "next/image";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" width={40} height={40} alt="img"></Image>
      <span className="text-xl font-semibdol text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}
export default Logo;
