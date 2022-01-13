import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
