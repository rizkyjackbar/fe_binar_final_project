const ProgresBar = ({ progres }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full"
        style={{ width: `${progres}` }}
      >
        {progres}
      </div>
    </div>
  );
};

export default ProgresBar;
