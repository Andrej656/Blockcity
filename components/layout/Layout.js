import { useEffect, useState } from "react";
import BackToTop from '../elements/BackToTop';
import Breadcrumb from './Breadcrumb';
import PageHead from './PageHead';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Header1 from "./header/Header1";
import Header2 from './header/Header2';
import Header3 from "./header/Header3";
import HiroWallet from "./path-to-your-wallet-component/HiroWallet"; // Update the path accordingly

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, pageCls }) {
    const [scroll, setScroll] = useState(0);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
        // document.querySelector("body").classList.add("body");
    }, []);

    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="wrapper">
                <div id="page" className={`pt-40 ${pageCls ? pageCls : ""}`}>
                    {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}
                    {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
                    {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
                    {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}

                    <HiroWallet /> {/* Include your Hiro Wallet component here */}

                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                    {children}

                    {!footerStyle && <Footer1 />}
                    {footerStyle == 1 ? <Footer1 /> : null}
                    {footerStyle == 2 ? <Footer2 /> : null}
                </div>
            </div>
            <BackToTop />
        </>
    );
}
