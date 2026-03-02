
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import "@ant-design/v5-patch-for-react-19";
import '@fortawesome/fontawesome-free/css/all.min.css';


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-outfit",
});

/*  SEO META INFORMATION */
export const metadata: Metadata = {
  title: {
    default:
      "Enterprise Technology Solutions | Cloud, AI & Cybersecurity | Betopia Limited",
    template: "%s | Betopia Limited",
  },

  description:
    "Secure, cloud-ready, AI-powered enterprise platforms and technology solutions delivered globally by Betopia Limited. Cloud, cybersecurity, AI & compliance services.",
  keywords: [
    "Betopia Limited",
    "Betopia enterprise technology",
    "enterprise technology solutions",
    "enterprise cloud services",
    "cybersecurity and compliance services",
    "AI analytics enterprise",
    "global IT consulting firm",
  ],
  //  themeColor: "#ffffff",
  robots: {
    index: true,
    follow: true,
  },

  // canonical URL 
  alternates: {
    canonical: "https://betopialimited.com",
  },

  openGraph: {
    title:
      "Enterprise Technology Solutions | Cloud, AI & Cybersecurity | Betopia Limited",
    description:
      "Secure, cloud-ready, AI-powered enterprise platforms and technology solutions delivered globally by Betopia Limited. Cloud, cybersecurity, AI & compliance services.",
    url: "https://betopialimited.com",
    siteName: "Betopia Limited",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} `}
    >
      <head>
        
        <meta name="color-scheme" content="light" />
      </head>

      <body className="font-outfit antialiased bg-white">
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm: theme.defaultAlgorithm, 
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
