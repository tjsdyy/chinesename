import { SiteConfig } from "@/types/siteConfig"

const baseSiteConfig = {
  name: "Chinese Name",
  description:
    "Generate Chinese Name for RedNote.",
  url: "https://chinesename.my",
  ogImage: "https://chinesename.my/og.jpg",
  metadataBase: new URL("http://chinesename.my"),
  keywords: ["ChineseName", "ChatGPT", "Chinese Name", "xiaohongshu", "red note", "xhs"],
  authors: [
    {
      name: "corlycao",
      url: "https://corlycao.com",
    }
  ],
  creator: 'xhs funs',
  themeColor: '#fff',
  icons: {
    icon: "/site.ico",
    shortcut: "/site.png",
    apple: "/site.png",
  },
  links: {
    twitter: "https://x.com/corlycao",
    github: "https://github.com/corlycao",
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
