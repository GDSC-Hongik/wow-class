"use server";

import { revalidateTag } from "next/cache";

export const revalidateTagByName = (tag: string) => {
  revalidateTag(tag);
};
