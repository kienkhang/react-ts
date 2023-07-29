import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Recoil
import { RecoilRoot } from 'recoil'

// Import global css
import './styles/main.css'

// Unplugin font
import 'unfonts.css'

// React Query Configure
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // default: true
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>
)

