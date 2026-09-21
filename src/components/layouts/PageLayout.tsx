import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloater from "./WhatsappFloater";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloater />
    </div>
  );
};

export default PageLayout;
