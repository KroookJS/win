import { useEffect, useState } from "react";
import { Context } from "@/contrex/TasksProvider";
import ComponentIsLoading from "@/components/isLoadingComponents/ComponentIsLoading";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import type { AppProps } from "next/app";
import { useActivePage } from "@/hooks/useActivePage";

export default function App({ Component, pageProps }: AppProps) {
  const isActive = useActivePage();

  const [queryClient] = useState(() => new QueryClient());

  return (
    <Context>
      <QueryClientProvider client={queryClient}>
        {/* <Hydrate state={pageProps.dehydratedState}> */}
        {isActive ? <Component {...pageProps} /> : <ComponentIsLoading />}
        {/* </Hydrate> */}
      </QueryClientProvider>
    </Context>
  );
}
