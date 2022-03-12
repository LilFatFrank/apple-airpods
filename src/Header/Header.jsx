import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import Sprite from "../Sprite/Sprite";
import { injected } from "../wallet-connector/eth-connector";
import "./Header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const { activate, account, active } = useWeb3React();

  const links1 = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Airpods",
    "Tv & Home",
    "Only on Apple",
    "Accessories",
    "Support"
  ];

  const links2 = ["Overview", "Tech Specs", "Compare"];

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setShowHeader(window.scrollY > 100 ? false : true);
    });
  }, []);

  async function connect() {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className={`header ${showHeader ? "" : "header-height"}`}>
        <div className={`header-1 ${showHeader ? "" : "hide"}`}>
          <Sprite id="apple-icon" width={24} height={24} className="icon" />
          {links1.map((link, index) => (
            <a key={index} className="link" href="#">
              {link}
            </a>
          ))}
          <Sprite id="search-icon" width={24} height={24} className="icon" />
          <Sprite id="cart-icon" width={24} height={24} className="icon" />
        </div>
        <div className="header-2">
          <a className="title">AirPods Pro</a>
          <div className="header-2-links">
            {links2.map((link, index) => (
              <a key={index} className="link" href="#">
                {link}
              </a>
            ))}
            <button className="button">Buy</button>
            {active ? (
              <span style={{ fontSize: "12px", color: "white" }}>
                {account.slice(0, 4)}...{account.slice(account.length - 4)}
              </span>
            ) : (
              <Sprite
                id="metamask"
                width={24}
                height={24}
                style={{ cursor: "pointer" }}
                onClick={connect}
              />
            )}
          </div>
        </div>
      </div>
      <div className={`fake-div ${showHeader ? "" : "header-height"}`}></div>
    </>
  );
};

export default Header;
