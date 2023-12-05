import { BadgeCheckIcon } from "@heroicons/react/outline";
import ProgresBar from "./ProgresBar";

const Module = ({ progres }) => {
  return (
    <aside className="float-right w-96 bg-white rounded-2xl shadow-md mr-32 ml-12 p-5 mt-20">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">Materi Belajar</h1>
        <div className="flex w-2/5">
          <BadgeCheckIcon className="w-6 stroke-green-400" />
          <ProgresBar progres={progres} />
        </div>
      </div>
    </aside>
  );
};

export default Module;
