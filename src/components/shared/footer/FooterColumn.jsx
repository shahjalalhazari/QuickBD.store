"use client"
import { userSignOut } from '@/utils/userSignOut';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FooterColumn = ({heading, links, isAccount=false}) => {
  const pathname = usePathname();
  const session = useSession();
  const isAccountPage = pathname.split("/").includes("account");

  return (
    <div className='footer-column'>
      <h4 className="column-heading">{heading}</h4>
      <ul className="column-links">
        {links.map((link, index) => (
          <li key={index} className={pathname === link.path ? "active-link" : "hover:underline"}>
            <Link href={link.path} target={link.target ? link.target : ""}>
              {link.title.split("|").map((line, i) => (
                <span key={i} className="block">
                  {line.trim()}
                </span>
              ))}
            </Link>
          </li>
        ))}
        {isAccount && <> {session.status === "authenticated" ?
          <>
            <li className={`quickbd-transition ${isAccountPage ? "active-link" : "hover:underline"}`}>
              <Link href={"/account"}>Account</Link>
            </li>
            <li className={`quickbd-transition hover:underline cursor-pointer`} onClick={() => userSignOut()}>
              Sign Out
            </li>
          </> :
          <li className={`quickbd-transition ${pathname === "/auth/signin" ? "active-link" : "hover:underline"}`}>
            <Link href={"/auth/signin"}>Sign In</Link>
          </li>
        }
        </>}
      </ul>
    </div>
  );
};

export default FooterColumn;