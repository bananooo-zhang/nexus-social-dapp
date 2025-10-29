import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { sepolia } from 'wagmi/chains' // 导入 Sepolia 网络
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import LandingPage from './LandingPage.tsx'
import GamePage from './App.tsx'
import './index.css'

const config = getDefaultConfig({
  appName: 'Nexus Social',
  projectId: 'nexus-social-demo', // 可以是任意字符串
  chains: [sepolia], // 将网络配置为 Sepolia
  ssr: false,
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/game" element={<GamePage />} />
            </Routes>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
