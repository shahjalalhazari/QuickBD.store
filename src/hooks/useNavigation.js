"use client"

import { usePathname } from "next/navigation";

export const useNavigation = () => {
  const pathname = usePathname();

  const normalize = (path) => {
    if (!path) return "";
    return path.endsWith("/") && path !== "/" 
      ? path.slice(0, -1) 
      : path;
  };

  const isActiveNavItem = (navItem) => {
    const currentPath = normalize(pathname);
    const itemPath = normalize(navItem.path);

    // EXACT MATCH
    if (navItem.exact) {
      return currentPath === itemPath;
    }

    // PATTERN MATCH
    if (navItem.matchPatterns?.length) {
      return navItem.matchPatterns.some(pattern => {
        const normalizedPattern = normalize(pattern);
        return currentPath.startsWith(normalizedPattern);
      });
    }

    // DEFAULT BEHAVIOR (Handles child routes))
    if (currentPath === itemPath) return true;

    return currentPath.startsWith(itemPath + "/");
  };

  return { isActiveNavItem };
};
