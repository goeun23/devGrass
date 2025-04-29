import React from 'react';
import  ReactDom from 'react-dom/client'

import App from './App'
import './index.css' // ✅ 이 줄 꼭 있어야 Tailwind 작동!
import {RecoilRoot} from 'recoil'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient();


ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
          <App />  
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);