import type { TMenuItem, TMenus, TContentItem } from "~/types/api-data-type";

export const getTextForNull = (value: string | null | undefined) => (value ? value : "");
export function getLength(data: any[]) {
  return data && data.length > 0 ? data.length : 0;
}

export function getMenuItem(row: TMenuItem) {
  return {
    id: row?.id,
    name: row?.name,
    link: row?.link,
    icon: row?.icon,
  };
}

export function getMenusData(data: TMenus[]) {
  const result: TMenus[] =
    getLength(data) > 0
      ? data.map((menu: TMenus) => ({
          ...getMenuItem(menu),
          subMenus:
            getLength(menu?.subMenus) > 0
              ? menu?.subMenus.map((subMenu: TMenuItem) => ({
                  ...getMenuItem(subMenu),
                }))
              : [],
        }))
      : [];

  return result;
}

export function getPageContent(data: TContentItem[]) {
  const result =
    getLength(data) > 0
      ? data.map((item: TContentItem) => ({
          id: item.id,
          title: item.title,
          subTitle: item.subTitle,
          description: item.description,
          icon: item.icon,
          imagePath: item.imagePath,
          linkText: item.linkText,
          linkPath: item.linkPath,
          linkIcon: item.linkIcon,
          type: item.type,
          isDeleted: item.isDeleted,
        }))
      : [];

  return result;
}
