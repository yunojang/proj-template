import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { ChakraProvider, Spinner } from "@chakra-ui/react";

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

const CodeLoading = () => (
  <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
    <Spinner
      color="green.500"
      emptyColor="gray.200"
      speed="0.3s"
      size="xl"
      thickness="4px"
    />
    <span>Loading...</span>
  </div>
);

// const ErrorInner = () => {
//   throw TypeError("TestError: Imediatly throw error");
// };

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<CodeLoading />}>
      <ErrorBoundary fallback={(msg) => <ErrorFallback msg={msg} />}>
        <ChakraProvider>
          <Router>{children}</Router>
        </ChakraProvider>
      </ErrorBoundary>
    </Suspense>
  );
};

export default AppProvider;
