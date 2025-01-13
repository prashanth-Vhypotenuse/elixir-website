export type TMenuItem = {
  id: number;
  name: string;
  link: string;
  icon?: string;
};

export type TMenus = TMenuItem & {
  subMenus: TMenuItem[];
};

export type TBannerItem = {
  id: number;
  title: string;
  bannerImgUrl?: string;
  videoUrl?: string;
  description: string;
};

export type TContentItem = {
  id: number;
  title: string;
  subTitle?: string;
  description?: string;
  icon?: string;
  imagePath?: string;
  linkText?: string;
  linkPath?: string;
  linkIcon?: string;
  type?: string;
  isDeleted?: number;
};
