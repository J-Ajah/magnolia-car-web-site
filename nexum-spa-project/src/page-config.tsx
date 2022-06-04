// add components mappings in here
import { Homepage } from "@/components/homepage/Homepage";
import {Navbar} from "@/components/common/Navbar"
import LogoImage from "@/components/common/LogoImage"


export const config = {
  componentMappings: {
    //components
    'nexum-core-templating:components/common/navbar': Navbar as React.FC,
    'nexum-core-templating:components/common/logo': LogoImage as React.FC,
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
