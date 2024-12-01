import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="pt-[76px]">{children}</main>
      <Footer />
    </>
  );
}
