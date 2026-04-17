"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const RemovePath = ({ remove_path }) => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const newPath = pathName.replace(`/${remove_path}`, "");

    if (newPath !== pathName) {
      router.push(newPath);
    }
  }, [pathName, remove_path, router]);

  return null; 
};

export default RemovePath;