import FooterMenu from "./FooterMenu";
import logo from "/images/logo.svg";
import facebookIcon from "/images/icon-facebook.svg"
import twitterIcon from "/images/icon-twitter.svg"
import pinterestIcon from "/images/icon-pinterest.svg"
import instagramIcon from "/images/icon-instagram.svg"

function Footer() {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        <img src={logo} alt="" />

        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          <FooterMenu
            header="Features"
            link1="Link shortening"
            link2="Branded links"
            link3="Analytics"
          />
          <FooterMenu
            header="Resources"
            link1="Blog"
            link2="Developers"
            link3="Support"
          />
          <FooterMenu
            header="Company"
            link1="About"
            link2="Our team"
            link3="Carrers"
            link4="Contact"
          />
        </div>

        <div className="flex space-x-6">
          <a href="#">
            <img src={facebookIcon} alt="" className="ficon" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="" className="ficon" />
          </a>
          <a href="#">
            <img src={pinterestIcon} alt="" className="ficon" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
