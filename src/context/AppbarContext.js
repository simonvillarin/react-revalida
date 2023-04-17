import React, { createContext, useState } from "react";

export const AppbarContext = createContext();

export const AppbarContextProvider = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  return (
    <AppbarContext.Provider
      value={{
        showMobileNav,
        setShowMobileNav,
        showMobileSearch,
        setShowMobileSearch,
      }}
    >
      {children}
    </AppbarContext.Provider>
  );
};
