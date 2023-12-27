const ProgresBar = ({ progres }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="bg-blue-600 flex items-center text-xs font-medium text-blue-100 text-center py-0.5 px-1 leading-none h-full rounded-full"
        style={{ width: `${progres}%` }}
      >
        {progres}%
      </div>
    </div>
  );
};

export default ProgresBar;
