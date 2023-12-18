const Footer = ({ footerText, pText }) => {
  return (
    <div className="justify-center flex">
      <div className="justify-center text-center">
        <h1 className="text-lg font-medium">{footerText}</h1>
        <p className="text-lg text-gray-600 pt-3">{pText}</p>
      </div>
    </div>
  );
};

export default Footer;
