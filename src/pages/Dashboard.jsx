import Logo from "../components/Logo";
import Body from "../components/Body";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div className="mt-20">
        <Header
          headerText="What are you looking to build?"
          pText="Chose the area you want to work in and we'll help you get started"
        />
      </div>
      <div className="w-full">
        <Body />
      </div>
      <div className="mt-9">
        <Footer
          footerText="What are you looking to build?"
          pText="Chose the area you want to work in and we'll help you get started"
        />
      </div>
    </div>
  );
};

export default Dashboard;
