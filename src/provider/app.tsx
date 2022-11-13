import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { QueryClientProvider, queryClient } from "@/lib/react-query";
import { ChakraProvider, Spinner } from "@chakra-ui/react";

interface AppProviderProps {
    children?: React.ReactNode;
}

const ErrorFallback = ({ msg }: { msg?: string }) => {
    return (
        <div
            className="w-screen h-screen bg-slate-100 text-red-500 flex flex-col items-center justify-center gap-2"
            role="alert"
        >
            <h1 className="text-4xl font-bold">
                Oops, Something went wrong 😅
            </h1>
            {msg && <h2 className="text-md">[Message] {msg}</h2>}
        </div>
    );
};

const CodeLoading = () => (
    <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
        <Spinner
            color="blue.200"
            emptyColor="gray.200"
            size="xl"
            thickness="4px"
        />
        {/* <div className="text-sm text-gray-500">Initial Loading</div> */}
    </div>
);

// const ErrorInner = () => {
//   throw TypeError("TestError: Imediatly throw error");
// };

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <ErrorBoundary fallback={(msg) => <ErrorFallback msg={msg} />}>
            <ChakraProvider>
                <QueryClientProvider client={queryClient}>
                    <Suspense fallback={<CodeLoading />}>
                        <Router>{children}</Router>
                    </Suspense>
                </QueryClientProvider>
            </ChakraProvider>
        </ErrorBoundary>
    );
};

export default AppProvider;
