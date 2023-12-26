import { BadgeCheckIcon } from "@heroicons/react/outline";
import ProgresBar from "./ProgresBar";
import { LockClosedIcon, PlayIcon } from "@heroicons/react/solid";

const Module = ({ progres, chapterData, setCurrentVideoUrl, openModal }) => {
  const handleModuleClick = (videoUrl, isLocked) => {
    if (!isLocked) {
      setCurrentVideoUrl(videoUrl);
    } else {
      openModal();
    }
  };

  return (
    <aside className="float-right w-[200px] lg:w-96 bg-white rounded-2xl shadow-md mr-0 lg:mr-32 ml-12 p-5 mt-10 lg:mt-20">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold hidden lg:block">Materi Belajar</h1>
        <div className="flex w-2/5 lg:gap-0 gap-2">
          <BadgeCheckIcon className="w-6 stroke-green-400" />
          <ProgresBar progres={progres} />
        </div>
      </div>

      {chapterData &&
        chapterData.map((chapter) => (
          <div key={chapter.id}>
            <div className="flex flex-row justify-between font-extrabold my-1 pt-3">
              <h4 className="text-indigo-600 text-[14px] lg:text-[16px] mr-3 lg:mr-0">{`Chapter ${chapter.index} - ${chapter.name}`}</h4>
              <h4 className="text-blue-400 text-[12px] lg:text-[14px]">{`${chapter.total_module_duration} Menit`}</h4>
            </div>
            {chapter.modules.map((module, index) => (
              <button
                key={module.id}
                className="text-xs font-normal flex flex-row justify-between mt-0.5 pb-2 border-b-2 mt-3 w-full items-center"
                onClick={() =>
                  handleModuleClick(module.video, chapter.is_locked)
                }
              >
                <div className="flex flex-row items-center">
                  <div className="w-9 h-9 bg-indigo-50 rounded-full flex items-center mr-3 justify-center font-bold">
                    {index + 1}
                  </div>
                  {module.name}
                </div>
                {chapter.is_locked === false && (
                  <PlayIcon className="w-4 fill-green-400" />
                )}
                {chapter.is_locked === true && (
                  <LockClosedIcon className="w-4 fill-indigo-900" />
                )}
              </button>
            ))}
          </div>
        ))}
    </aside>
  );
};

export default Module;
