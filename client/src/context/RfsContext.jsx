import { createContext, useContext, useRef } from "react";

export const RfsContext = createContext();

export const RfsProvider = ({ children }) => {
  const mainContainer = useRef(null);
  const cssRef = useRef(null);
  const expressRef = useRef(null);
  const figmaRef = useRef(null);
  const fireRef = useRef(null);
  const gitRef = useRef(null);
  const githubRef = useRef(null);
  const htmlRef = useRef(null);
  const ideaRef = useRef(null);
  const javaRef = useRef(null);
  const jsRef = useRef(null);
  const mongoRef = useRef(null);
  const sqlRef = useRef(null);
  const nodeRef = useRef(null);
  const postmanRef = useRef(null);
  const tailwindRef = useRef(null);
  const viteRef = useRef(null);
  const vscodeRef = useRef(null);
  const webstromRef = useRef(null);
  const reactRef = useRef(null);
  const titleRef = useRef(null);

  const skillsContainerRef = useRef(null)
  const navRef = useRef(null)
  const wrapperRef = useRef(null)
  const projectContainerRef = useRef(null)

  return (
    <RfsContext.Provider
      value={{
        mainContainer,
        cssRef,
        expressRef,
        figmaRef,
        fireRef,
        gitRef,
        githubRef,
        htmlRef,
        ideaRef,
        javaRef,
        jsRef,
        mongoRef,
        sqlRef,
        nodeRef,
        postmanRef,
        tailwindRef,
        viteRef,
        vscodeRef,
        webstromRef,
        reactRef,
        titleRef,
        skillsContainerRef,
        navRef,
        wrapperRef,
        projectContainerRef
      }}
    >
      {children}
    </RfsContext.Provider>
  );
};

export const useRefs = () => useContext(RfsContext);
