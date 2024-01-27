// Header1.js
import React, { useState } from 'react';
import Link from 'next/link';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';
import WalletConnect from './HiroWallet'; // Adjust the path

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!isSidebar);

  const handleConnectWallet = () => {
    WalletConnect();
  };

  return (
    <>
      <header id="header_main" className={`header_1 header-fixed ${scroll ? 'is-fixed is-small' : ''}`}>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div id="site-header-inner">
                <div className="wrap-box flex">
                  <div id="site-logo">
                    <div id="site-logo-inner">
                      <Link href="/" rel="home" className="main-logo">
                        <img id="logo_header" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
                      </Link>
                    </div>
                  </div>
                  <div className="mobile-button" onClick={handleMobileMenu}>
                    <span />
                  </div>
                  <nav id="main-nav" className="main-nav">
                    <Menu />
                  </nav>
                  <div className="flat-wallet flex">
                    <div id="wallet-header">
                      <button onClick={handleConnectWallet} className="tf-button style-1">
                        <span>Wallet connect</span>
                        <i className="icon-wa" />
                      </button>
                    </div>
                    <div className="canvas" onClick={handleSidebar}>
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`canvas-nav-wrap ${isSidebar ? 'active' : ''}`}>
          <div className="overlay-canvas-nav" onClick={handleSidebar} />
          <div className="inner-canvas-nav">
            <div className="side-bar">
              {/* ... (rest of your existing code) */}
            </div>
          </div>
        </div>
        <div className={`mobile-nav-wrap ${isMobileMenu ? 'active' : ''}`}>
          <div className="overlay-mobile-nav" onClick={handleMobileMenu} />
          <div className="inner-mobile-nav">
            <Link href="/" rel="home" className="main-logo">
              <img id="mobile-logo_header" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
            </Link>
            <div className="mobile-nav-close" onClick={handleMobileMenu}>
              {/* ... (rest of your existing code) */}
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
