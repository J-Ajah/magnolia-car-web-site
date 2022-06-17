// add components mappings in here
import { Homepage } from "@/components/homepage/Homepage";
import { Aboutpage } from "@/components/aboutpage/Aboutpage";
import { Navbar } from "@/components/common/Navbar";
import LogoImage from "@/components/common/LogoImage";
import NavLinks from "@/components/common/NavLinks";
import { Banner } from "./components/homepage/Banner";
import { BannerAction } from "./components/homepage/BannerAction";
import { CtaDetails } from "./components/homepage/CtaDetails";
import { ctaImage } from "./components/homepage/ctaImage";
import { LatestCar } from "./components/homepage/LatestCar";
import { CarListing } from "./components/homepage/CarListing";
import { Cars } from "./components/homepage/Cars";
import Footer from "./components/common/Footer";
import { FooterInformation } from "./components/common/FooterInformation";
import { LinkDetails } from "./components/common/LinkDetails";
import { FooterPosts } from "./components/common/FooterPosts";
import { FooterSubscribe } from "./components/common/FooterSubscribe";
import Posts from "./components/common/Posts";
import Servicespage from "./components/servicespage/Servicespage";
import Showroompage from "./components/showroompage/ShowroomPage";
import Contactpage from "./components/contactpage/Contactpage";
import PrivacyTerms from "./components/common/PrivacyTerms";
import SocialIcons from "./components/common/SocialIcons";
import Copyright from "./components/common/Copyright";
// import FooterCopyright from "./components/common/FooterCopyright";

export const config = {
  componentMappings: {
    //components
    "nexum-core-templating:components/common/navbar": Navbar as React.FC,
    "nexum-core-templating:components/common/logo": LogoImage as React.FC,
    "nexum-core-templating:components/common/navLinks": NavLinks as React.FC,
    "nexum-core-templating:components/carBanner": Banner as React.FC,
    "nexum-core-templating:components/cta": BannerAction as React.FC,
    "nexum-core-templating:components/ctaDetails": CtaDetails as React.FC,
    "nexum-core-templating:components/ctaImages": ctaImage as React.FC,
    "nexum-core-templating:components/latestCars": LatestCar as React.FC,
    "nexum-core-templating:components/carListing": CarListing as React.FC,
    "nexum-core-templating:components/carInfo": Cars as React.FC,
    "nexum-core-templating:components/footer": Footer as React.FC,
    "nexum-core-templating:components/footerInfo":
      FooterInformation as React.FC,
    "nexum-core-templating:components/footerLinks": LinkDetails as React.FC,
    "nexum-core-templating:components/footerPosts": FooterPosts as React.FC,
    "nexum-core-templating:components/subscribe": FooterSubscribe as React.FC,
    "nexum-core-templating:components/post": Posts as React.FC,
    "nexum-core-templating:components/common/privacyTerms":
      PrivacyTerms as React.FC,
    "nexum-core-templating:components/common/socialIcons":
      SocialIcons as React.FC,
    "nexum-core-templating:components/common/copyright": Copyright as React.FC,

    // // pages
    "nexum-core-templating:pages/home": Homepage as React.FC,
    "nexum-core-templating:pages/about": Aboutpage as React.FC,
    "nexum-core-templating:pages/service": Servicespage as React.FC,
    "nexum-core-templating:pages/showroom": Showroompage as React.FC,
    "nexum-core-templating:pages/contactUs": Contactpage as React.FC,
  },
};
