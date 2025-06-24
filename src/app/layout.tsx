import type { Metadata } from "next";
import "@/styles/globals.scss";
import styles from "@/styles/layout.module.scss";


export const metadata: Metadata = {
  title: "카드핏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={styles.layout}>{children}</body>
    </html>
  );
}
