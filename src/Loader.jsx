import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

export const LoaderContext = React.createContext({
  openLoader: () => { },
  closeLoader: () => { },
  isLoaderOpen: false,
});

export function useLoader() {
  const loaderContext = React.useContext(LoaderContext);
  return {
    openLoader: () => loaderContext.openLoader(),
    closeLoader: () => loaderContext.closeLoader(),
    isLoaderOpen: loaderContext.isLoaderOpen,
  };

}

export function LoaderProvider({ ...props }) {
  const [isLoaderOpen, setIsLoaderOpen] = React.useState(false);
  const openLoader = () => setIsLoaderOpen(true);
  const closeLoader = () => setIsLoaderOpen(false);
  return (
    <LoaderContext.Provider
      value={{
        openLoader,
        closeLoader,
        isLoaderOpen,
      }}
    >
      {props.children}
      <Backdrop
        style={{ zIndex: 9999, color: "#BDBDBD" }}
        open={isLoaderOpen}
        onClick={(e) => e.preventDefault()}
      >
        <div
          className="fs-16"
          style={{
            textTransform: "initial",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Please wait while processing your request
          <br />
          <br />
          <CircularProgress size="5rem" color="inherit" />
        </div>
      </Backdrop>
    </LoaderContext.Provider>
  );
}
