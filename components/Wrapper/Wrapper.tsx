import { ReactNode } from "react";
import S from './styles'

interface IWrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <>
      <S.Wrapper>
        <header>
          <h2>{`Matheus's blog`}</h2>
          <div>
            <div>Blog</div>
            <div>Tags</div>
            <div>About</div>
          </div>
        </header>
        <main>{children}</main>
      </S.Wrapper>
    </>
  );
};

export default Wrapper;
