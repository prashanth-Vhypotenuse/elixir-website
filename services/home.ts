import ServiceCall from "./service-call";
import { home } from "./service-routes.json";

export async function GetMenuListApi({ Type }: { Type: string | number }) {
  const response = await ServiceCall({
    ...home.menuList,
    queryParams: { Type: Type },
  });

  return response;
}

export async function GetPageContentApi({ Type }: { Type: string }) {
  const response = await ServiceCall({
    ...home.content,
    queryParams: { Type: Type },
  });

  return response;
}
