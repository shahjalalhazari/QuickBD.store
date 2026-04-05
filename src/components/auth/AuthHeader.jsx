import Link from "next/link";


const AuthHeader = ({heading, bodyText, linkText, linkHref }) => {
  return (
    <div className="header">
      <h3 className="heading">{heading}</h3>
      <p className="redirect-text">
        {bodyText}?&nbsp;
        <Link href={linkHref}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default AuthHeader;