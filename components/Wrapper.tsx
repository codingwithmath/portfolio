import Link from "next/link";
import { ReactNode } from "react";

interface IWrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <div className="wrapper">
      <header>
        <h1>{`Matheus's Blog`}</h1>
        by{" "}
        <a
          href="https://www.linkedin.com/in/matheus-almeida1337/"
          target={"_blank"}
        >
          Matheus Almeida
        </a>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Wrapper;
