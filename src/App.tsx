import '@aws-amplify/ui-react/styles.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { FC, ReactNode, useState, useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    GlowWalletAdapter,
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

// Views
import LandingPage from './views/LandingPage';
import ProfilePage from './views/ProfilePage';
import Header from './views/Header';
import Page404 from './views/Page404';

const App: FC = () => {
  return (
      <Context>
        <Content />
      </Context>
  );
};
export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
      () => [
          new PhantomWalletAdapter(),
          new GlowWalletAdapter(),
          new SlopeWalletAdapter(),
          new SolflareWalletAdapter({ network }),
          new TorusWalletAdapter(),
      ],
      [network]
  );

  return (
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>{children}</WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
};

const Content: FC = () => {
  return (
    <div className="app">
      <Header/>
      <main className="main">
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/:pageId' element={<ProfilePage/>} />
            <Route path='/404' element={<Page404/>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};
