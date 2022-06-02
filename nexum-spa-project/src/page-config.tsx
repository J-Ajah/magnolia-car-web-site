// add components mappings in here
// import NewsIndex  from "./components/news/Index"
// import  PressIndex from "./components/press/PressRelease"
// import { NewsDetails } from "@/components/news/NewsDetail";
// import { FeaturedNews } from "@/components/news/FeaturedNews";
// import { OtherFeaturedNews } from "@/components/news/OtherFeatured";
import { Homepage } from "@/components/homepage/Homepage";
// import { Headline } from "@/components/common/Headline";
// import Banner from "@/components/common/Banner";
// import {NewsSection} from "@/components/NewsSection";
// // import {PressCard} from "@/components/PressCard";
// import FooterArea from "@/components/footer/FooterArea";
// import {Contact} from "@/components/footer/Contact";
// import {SocialMediaLinks} from "@/components/footer/SocialMediaLinks";
// import {Links} from "@/components/footer/Links";
// import QuickLinksArea from "@/components/footer/QuickLinksArea";
// import {SinglePressPage} from "@/components/press/PressDetails";
// import {PressBanner} from "@/components/press/PressBanner";
// import PressReleaseList from "@/components/press/PressReleaseList";
// import PressReleaseHighlights from "@/components/press/PressReleaseHighlights";

export const config = {
  componentMappings: {
    //components
    // 'nexum-core-templating:components/common/headline': Headline as React.FC,
    // 'nexum-core-templating:components/common/banner': Banner as React.FC,
    // 'nexum-core-templating:components/common/footerArea': FooterArea as React.FC,
    // 'nexum-core-templating:components/common/footer/quick-links-area': QuickLinksArea as React.FC,
    // 'nexum-core-templating:components/news/news-card': NewsSection as React.FC,
    // // 'nexum-core-templating:components/news/press-card': PressCard as React.FC,
    // 'nexum-core-templating:components/common/footer/contact': Contact as React.FC,
    // 'nexum-core-templating:components/common/footer/social-media-links': SocialMediaLinks as React.FC,
    // 'nexum-core-templating:components/common/footer/links': Links as React.FC,
    // 'nexum-core-templating:components/pressBanner': PressBanner as React.FC,
    // 'nexum-core-templating:components/press/press-listing': PressReleaseList as React.FC,
    // 'nexum-core-templating:components/press/press-highlights': PressReleaseHighlights as React.FC,


    // // pages
    // "nexum-core-templating:pages/news-page": NewsIndex as React.FC,
    // "nexum-core-templating:pages/press-release-page": PressIndex as React.FC,
    "nexum-core-templating:pages/home": Homepage as React.FC,
    // "nexum-core-templating:pages/news-detail": NewsDetails as React.FC,
    // 'nexum-core-templating:pages/single-press-page': SinglePressPage as React.FC
  },
};
