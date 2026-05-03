"use client";
import { createContext, useContext, useEffect, useState } from "react";

const HeaderContext = createContext();

export function HeaderProvider({ children }) {
  const [header, setHeader] = useState({
    heading: "",
    subheading: ""
  });

  return <HeaderContext.Provider value={{ header, setHeader}}>
    { children }
  </HeaderContext.Provider>
}

// CUSTOME HOOK FOR PAGES
export function useDashboardHeader(heading, subheading) {
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    setHeader({heading, subheading});

    return () => {
      setHeader({
        heading: "",
        subheading: "",
      })
    }
  }, [heading, subheading, setHeader])
}

// HOOK FOR HEADER COMPONENT
export function useHeader() {
  return useContext(HeaderContext);
}