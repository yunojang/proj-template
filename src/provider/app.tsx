import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { ErrorBoundary } from "@/components/ErrorBoundary";

interface AppProviderProps {
  children?: React.ReactNode;
}

const ErrorFallback = ({ msg }: { msg?: string }) => {
  return (
    <div
      className="w-screen h-screen bg-slate-100 text-red-500 flex flex-col items-center justify-center gap-2"
      role="alert"
    >
      <h1 className="text-4xl font-bold">Oops, Something went wrong 😅</h1>
      {msg && <h2 className="text-md">[Message] {msg}</h2>}
    </div>
  );
};

const ErrorInner = () => {
  throw TypeError("TestError: Imediatly throw error");
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          loading...
        </div>
      }
    >
      <ErrorBoundary fallback={(msg) => <ErrorFallback msg={msg} />}>
        <ChakraProvider>
          <Router>{children}</Router>
        </ChakraProvider>
      </ErrorBoundary>
    </Suspense>
  );
};

export default AppProvider;
