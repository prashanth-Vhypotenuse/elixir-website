export interface INavMenu {
  label: string;
  path: string;
  childList: { label: string; path: string }[];
}

export interface IBannerDetails {
  title: string;
  bannerImgUrl?: string;
  videoUrl?: string;
  description: string;
}

export interface ICompanyMetric {
  icon: string;
  title: string;
  description: string;
}

export interface ICompanySupport {
  icon: string;
  title: string;
  description: string;
}

export interface IService {
  imgPath: string;
  serviceTitle: string;
  serviceDescription: string;
  linkPath: string;
}

export interface IAdditionalService {
  icon: string;
  title: string;
  description: string;
  linkPath?: string;
  linkText?: string;
  linkIcon?: string;
}

export interface IWhyTochooseUs {
  icon: string;
  title: string;
  description: string;
}

export interface IThingsYouGet {
  icon: string;
  title: string;
  description: string;
}

export interface IGlobalLeader {
  name: string;
  designation: string;
  imgPath: string;
  description: string;
}

export interface IAchivement {
  name: string;
  achived: string;
}

export interface IPartner {
  srcPath: string;
  alt: string;
}

export interface IClientDetails {
  name: string;
  designation: string;
  clientImg: string;
  description: string;
}

export interface ILatestNews {
  newsName: string;
  newsBy: string;
  imgPath: string;
  description: string;
  newsLink: string;
}

export interface IFooterLink {
  label: string;
  path: string;
}

export interface ISocialMediaLink {
  label: string;
  path: string;
  icon: string;
}
