import "@/app/ui/global.css";
import { inter, playwrite } from "@/app/ui/fonts";

export default function RootLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <html lang="en">
                  <body className={`${playwrite.className} antialiased`}>
                        {children}
                  </body>
            </html>
      );
}
