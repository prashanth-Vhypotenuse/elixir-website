import type {
  IAchivement,
  IAdditionalService,
  IBannerDetails,
  IClientDetails,
  ICompanyMetric,
  ICompanySupport,
  IFooterLink,
  IGlobalLeader,
  ILatestNews,
  INavMenu,
  IPartner,
  IService,
  ISocialMediaLink,
  IThingsYouGet,
  IWhyTochooseUs,
} from "~/types/static-types";

export const NAV_MENUS: INavMenu[] = [
  {
    label: "Home",
    path: "/",
    childList: [
      { label: "Slider Header", path: "/" },
      { label: "Slider Classic", path: "/" },
      { label: "Static Header", path: "/" },
      { label: "Static Classic", path: "/" },
      { label: "Youtube Background", path: "/" },
      { label: "Youtube Classic", path: "/" },
      { label: "Self-hosted Video", path: "/" },
      { label: "Self-hosted Classic", path: "/" },
    ],
  },
  {
    label: "Pages",
    path: "/",
    childList: [
      { label: "Services", path: "/" },
      { label: "About", path: "/" },
      { label: "Alumni", path: "/" },
      { label: "Blank Page", path: "/" },
      { label: "404 Page", path: "/" },
      { label: "Login", path: "/" },
      { label: "Registration", path: "/" },
    ],
  },
  {
    label: "News",
    path: "/",
    childList: [
      { label: "Newsroom", path: "/" },
      { label: "Single News", path: "/" },
    ],
  },
  {
    label: "Elements",
    path: "/",
    childList: [
      { label: "Buttons", path: "/" },
      { label: "Colors", path: "/" },
      { label: "Google Map", path: "/" },
      { label: "Grid", path: "/" },
      { label: "Icons", path: "/" },
      { label: "Layout Helpers", path: "/" },
      { label: "Modal Video", path: "/" },
      { label: "Owl Carousal", path: "/" },
      { label: "Slider", path: "/" },
      { label: "Typography", path: "/" },
    ],
  },
  {
    label: "Contact",
    path: "/",
    childList: [],
  },
];

export const BANNERS: IBannerDetails[] = [
  {
    title: "Helping Leaders",
    bannerImgUrl: Images.bannerImage1,
    description: "We look forward to help you in taking your company to new height.",
  },
  {
    title: "Expert Consultants",
    bannerImgUrl: Images.bannerImage2,
    description: "Over 10 years of experience in helping clients finding comprehensive solutions.",
  },
  {
    title: "Growth Partners",
    bannerImgUrl: Images.bannerImage3,
    description: "Connect with top consultants hand-picked by Elixir consulting and finance.",
  },
  {
    title: "Expert Consultants",
    bannerImgUrl: Images.bannerImage4,
    description: "Over 10 years of experience in helping clients finding comprehensive solutions.",
  },
  {
    title: "Expert Consultants",
    videoUrl: Videos.video1,
    description: "Over 10 years of experience in helping clients finding comprehensive solutions.",
  },
];

export const COMPANY_METRICS: ICompanyMetric[] = [
  {
    icon: "ion:bar-chart",
    title: "Business Consulting",
    description: "Solution for every business related problems, readily and skillfully.",
  },
  {
    icon: "ion:md-alarm",
    title: "Risk Management",
    description: "Calculate every possible risk in your business, take control over them.",
  },
  {
    icon: "ion:android-bulb",
    title: "Market Research",
    description: "Know the market before taking any step, reduce risks before you go.",
  },
  {
    icon: "ion:md-headset",
    title: "Quality Services",
    description: "Experience unparalleled service, from beginning to final construction.",
  },
];

export const COMPANYSUPPORTS: ICompanySupport[] = [
  {
    icon: "fa-solid:users",
    title: "Awesome Team",
    description:
      "Before talking destination, we shine a spotlight across your organization to fully understand it.",
  },
  {
    icon: "fa-solid:comments",
    title: "Excellent Support",
    description:
      "If you face any trouble, you can always let our dedicated support team help you. They are ready for you 24/7.",
  },
  {
    icon: "fa-solid:bolt",
    title: "Faster Performance",
    description:
      "We develop a systematic well-ordered process of analysis, from concept through implementation.",
  },
];

export const SERVICES: IService[] = [
  {
    imgPath: Images.serviceImage1,
    serviceTitle: "Business Consulting",
    serviceDescription:
      "As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.",
    linkPath: "/",
  },
  {
    imgPath: Images.serviceImage2,
    serviceTitle: "Tax consulting",
    serviceDescription:
      "Elixir serves clients across the country and around the world as they navigate an increasingly complex tax landscape. Our tax professionals draw on deep experience and industry-specific knowledge to deliver clients the insights and innovation they need.",
    linkPath: "/",
  },
  {
    imgPath: Images.serviceImage3,
    serviceTitle: "Advisory",
    serviceDescription:
      "To help you understand what this road looks like, we surveyed 1165 digital marketers across Europe and North America to explore current trends and priorities in digital marketing.",
    linkPath: "/",
  },
];

export const ADDITIONAL_SERVICES: IAdditionalService[] = [
  {
    icon: "fa6-solid:credit-card",
    title: "Special financing",
    description: "Apply for special financial support and earn exclusive rewards.",
  },
  {
    icon: "fa6-solid:comment-dots",
    title: "Chat with team",
    description: "Have a question? Chat online with an expert.",
    linkPath: "/",
    linkIcon: "fa6-solid:arrow-up-right-from-square",
    linkText: "Start chatting",
  },
  {
    icon: "fa6-solid:phone",
    title: "Call a specialist",
    description: "Our 24/7 support team is ready for you at 1-800-MY-Elixir.",
  },
];

export const WHY_TO_CHOOSE_US: IWhyTochooseUs[] = [
  {
    icon: "ion:chatbubble-working",
    title: "We Are Professional",
    description:
      "We resource, train, speak, mentor and encourage; marketplace leaders, business owners and career professionals to be effective in the workplace.",
  },
  {
    icon: "ion:color-palette",
    title: "We Are Creative",
    description:
      "With so many factors to consider when deciding how to characterize your company , wouldn’t it be great to have a group of forward-thinking, well-informed individuals on board who know what they’re doing?",
  },
  {
    icon: "ion:ios-timer",
    title: "24/7 Great Support",
    description:
      "Design clever and compelling marketing strategies, improve product positioning, and drive conversion rates, Elixir is all time available to guide you.",
  },
];

export const THINGS_YOU_GETS: IThingsYouGet[] = [
  {
    icon: "fa6-solid:building-circle-check",
    title: "Creative Support",
    description:
      "We transform brands, grow businesses, and tell brand and product stories in a most creative way.",
  },
  {
    icon: "fa6-solid:envelope",
    title: "Creating Experiences",
    description:
      "We transform brands, grow businesses, and tell brand and product stories in a most creative way.",
  },
  {
    icon: "fa6-solid:building-columns",
    title: "Product Consulting",
    description:
      "We guide you through the pipelines that generate new products with higher potential and lower risk.",
  },
  {
    icon: "fa6-solid:globe",
    title: "Business Boosting",
    description:
      "We provide energy-efficient and environmentally conservative solutions to our clients to boost their business.",
  },
  {
    icon: "fa6-solid:money-bill-1",
    title: "Strategic Approach",
    description:
      "Based on solid strategic framework and real, relevant research, we create prototypes, not presentations.",
  },
  {
    icon: "fa6-solid:chart-line",
    title: "Logistic Consulting",
    description:
      "We work buy side and sell side to give our clienrts hard hitting answers and focus hard on best opportunities.",
  },
];

export const GLOBAL_LEADERS: IGlobalLeader[] = [
  {
    name: "Reenal Scott",
    designation: "Advertising Consultant",
    imgPath: Images.leaderImage1,
    description:
      "Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.",
  },
  {
    name: "Lily Anderson",
    designation: "Activation Consultant",
    imgPath: Images.leaderImage2,
    description:
      "Lily leads Elixir UK and oversees the company’s Customer Operations teams supporting millions ofr users.",
  },
  {
    name: "Thomas Anderson",
    designation: "Change Management Consultant",
    imgPath: Images.leaderImage3,
    description:
      "As the VP of People, Thomas’s focus lies in the development and optimization of talent retention.",
  },
  {
    name: "Legartha Mantana",
    designation: "Brand Management Consultant",
    imgPath: Images.leaderImage4,
    description:
      "As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.",
  },
  {
    name: "John Snow",
    designation: "Business Analyst",
    imgPath: Images.leaderImage5,
    description:
      "John has overseen the meteoric growth while protecting scaling its uniquely creative and culture.",
  },
  {
    name: "Ragner Lothbrok",
    designation: "Business Consultant",
    imgPath: Images.leaderImage6,
    description:
      "Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization which drives the core programming.",
  },
];

export const ACHIVEMENTS: IAchivement[] = [
  { name: "Cases Solved", achived: "52k" },
  { name: "Trained Experts", achived: "164" },
  { name: "Branches", achived: "38" },
  { name: "Satisfied Clients", achived: "100%" },
];

export const PARTNERS: IPartner[] = [
  { srcPath: Images.PartnerLogo1, alt: "logo1" },
  { srcPath: Images.PartnerLogo2, alt: "logo2" },
  { srcPath: Images.PartnerLogo3, alt: "logo3" },
  { srcPath: Images.PartnerLogo4, alt: "logo4" },
  { srcPath: Images.PartnerLogo5, alt: "logo5" },
  { srcPath: Images.PartnerLogo6, alt: "logo6" },
];

export const CLIENTS: IClientDetails[] = [
  {
    name: "Michael Clarke",
    designation: "CEO, A.E.T Institute",
    clientImg: Images.clientImage1,
    description:
      "Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!",
  },
  {
    name: "Maria Sharapova",
    designation: "Managing Director, Themewagon Inc.",
    clientImg: Images.clientImage2,
    description:
      "Writing case studies was a daunting task for us. We didn’t know where to begin or what questions to ask, and clients never seemed to follow through when we asked. Elixir team did everything – with almost no time or effort for me!",
  },
  {
    name: "David Beckham",
    designation: "Chairman, Harmony Corporation",
    clientImg: Images.clientImage3,
    description:
      "As a sales gamification company, we were skeptical to work with a consultant to optimize our sales emails, but Elixir was highly recommended by many other Y-Combinator startups we knew. Elixir helped us run a ~6 week email campaign.",
  },
];

export const LATEST_NEWS: ILatestNews[] = [
  {
    newsName: "Tax impacts of lease mean accounting change",
    newsBy: "By Paul O'Sullivan",
    imgPath: Images.newsImage1,
    description:
      "HMRC released a consultation document to flag some potential tax impacts that a forthcoming change...",
    newsLink: "/",
  },
  {
    newsName: "What brexit means for data protection law",
    newsBy: "By Enrico Ambrosi",
    imgPath: Images.newsImage2,
    description:
      "Assuming that the referendum is not ignored completely, there are two possible futures for the UK...",
    newsLink: "/",
  },
  {
    newsName: "The growing meanace of social engineering fraud",
    newsBy: "By Robson",
    imgPath: Images.newsImage3,
    description:
      "Social engineering involves the collection of information from various sources about a target...",
    newsLink: "/",
  },
];

export const FOOTER_LINKS: IFooterLink[] = [
  { label: "Contact Us", path: "/" },
  { label: "FAQ", path: "/" },
  { label: "Privacy Policy", path: "/" },
  { label: "Terms of Use", path: "/" },
  { label: "Global Office", path: "/" },
  { label: "Local Office", path: "/" },
];

export const SOCIAL_MEDIA_LINKS: ISocialMediaLink[] = [
  { label: "Linkedin", path: "/", icon: "simple-icons:linkedin" },
  { label: "Twitter", path: "/", icon: "simple-icons:twitter" },
  { label: "Facebook", path: "/", icon: "simple-icons:facebook" },
  { label: "Google+", path: "/", icon: "simple-icons:google" },
];
