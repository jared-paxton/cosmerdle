import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import Game from "./pages/Game";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Game />
    </QueryClientProvider>
  );
};

export default App;
