const Button = ({ buttonName }) => {
  return (
    <div className="p-2 flex-1">
      <button className="bg-gray-200 shadow-xl border border-gray-300 hover:bg-gray-300 py-9 px-6 rounded-lg w-full cursor-pointer hover:-translate-x-2 hover:-translate-y-2 hover:transition-transform ">
        {buttonName}
      </button>
    </div>
  );
};

export default Button;

