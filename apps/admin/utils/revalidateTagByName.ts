"use server";

import { revalidateTag } from "next/cache";

export const revalidateTagByName = async (tag: string) => {
  revalidateTag(tag);
};
