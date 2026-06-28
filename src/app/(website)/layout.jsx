import Nav from "@/components/Nav";

import Footer from "@/pages/Home/Footer";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Nav />
      {children}

      <Footer />
    </>
  );
}
