import Button from "./Button.jsx"; // Assuming it's a JSX file

const Body = () => {
  return (
    <div className="mt-20 justify-center text-center items-center flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Button buttonName="Field operations" />
        <Button buttonName="Client portal" />

        <Button buttonName="Inventory Menagement" />
        <Button buttonName="Company directory" />

        <Button buttonName="Event planning" />
        <Button buttonName="Admin dashboard" />
      </div>
    </div>
  );
};

export default Body;
