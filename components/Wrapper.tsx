import Link from "next/link";
import { ReactNode } from "react";

interface IWrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <div className="wrapper">
      <header>
        <h1>{`📓 Matheus's Blog`}</h1>
        <div className="links">
          <Link key={"blog"} href={"/home"}>
            Blog
          </Link>
          <Link key={"tags"} href={"/home"}>
            Tags
          </Link>
          <Link key={"about"} href={"/home"}>
            About
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Wrapper;
