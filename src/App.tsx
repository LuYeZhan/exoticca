import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Products from "./containers/Products";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );
}

export default App;
