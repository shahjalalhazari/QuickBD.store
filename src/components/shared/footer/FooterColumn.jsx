"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FooterColumn = ({heading, links, isAccount=false}) => {
  const pathname = usePathname();

  return (
    <div className='footer-column'>
      <h4 className="column-heading">{heading}</h4>
      <ul className="column-links">
        {links.map((link, index) => (
          <li key={index} className={pathname === link.path ? "active-link" : "hover:underline"}>
            <Link href={link.path}>
              {link.title.split("|").map((line, i) => (
                <span key={i} className="block">
                  {line.trim()}
                </span>
              ))}
            </Link>
          </li>
        ))}
        {isAccount && <>
          <li className={`quickbd-transition ${pathname === "/account" ? "active-link" : "hover:underline"}`}>
            <Link href={"/account"}>Account</Link>
          </li>
          <li className={`quickbd-transition ${pathname === "/sign-in" ? "active-link" : "hover:underline"}`}>
            <Link href={"/sign-in"}>Sign In</Link>
          </li>
        </>}
      </ul>
    </div>
  );
};

export default FooterColumn;