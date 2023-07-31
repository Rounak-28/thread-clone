import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children, ...props }: any) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isActive && pathname != "/") {
    props.className += " nav-color";
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
