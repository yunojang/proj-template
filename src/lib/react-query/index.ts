import { QueryClient, DefaultOptions } from "react-query";

const queryConfig: DefaultOptions = {
    queries: {
        useErrorBoundary: true,
        retry: false,
        refetchOnWindowFocus: false,
        suspense: true,
    },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export { QueryClientProvider } from "react-query";
