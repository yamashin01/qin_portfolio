import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto grid grid-rows-[auto,1fr,auto] min-h-screen">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};
