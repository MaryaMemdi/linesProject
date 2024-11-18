import CombinedNavbar from "./components/CombinedNavbar";
import Footer from "./components/footer";
import { LayoutProps } from "./types/homePageTypes";
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <CombinedNavbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
