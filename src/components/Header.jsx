import SearchComponent from "./SearchComponent";

const Header = ({ headerText }) => {
  return (
    <div className="justify-center flex">
      <div className="justify-center text-center">
        <h1 className="text-5xl mx-4 font-medium">{headerText}</h1>
        <div className="flex justify-center pt-8">
          <SearchComponent />
        </div>{" "}
      </div>
    </div>
  );
};

export default Header;
