import { headers } from "next/headers";

export const getClientInfo = async (req = null) => {
  let headerList;

  if (req) {
    headerList = req.headers;
  } else {
    headerList = await headers();
  }

  const forwarded = headerList.get("x-forwarded-for");
  const realIp = headerList.get("x-real-ip");
  const userAgent = headerList.get("user-agent") || "Unknown";

  let ip = "unknown";

  if (forwarded) {
    ip = forwarded.split(",")[0].trim();
  } else if (realIp) {
    ip = realIp;
  }

  return { ip, userAgent };
}