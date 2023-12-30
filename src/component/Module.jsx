import { BadgeCheckIcon } from "@heroicons/react/outline";
import ProgresBar from "./ProgresBar";
import { LockClosedIcon, PlayIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const Module = ({
  courseId,
  chapterData,
  setCurrentVideoUrl,
  openModal,
  setIsOnBoardingOpen,
}) => {
  const token = localStorage.getItem("accessToken");
  const [tracker, setTracker] = useState({
    id: "",
    last_opened_chapter: 0,
    last_opened_module: 0,
    progress_course: 0,
    total_modules_viewed: 0,
  });
  const [activeModule, setActiveModule] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);
  // const [forceUpdate, setForceUpdate] = useState(false);

  console.log(tracker);

  const handleModuleClick = async (
    moduleId,
    chapIndex,
    modulIndex,
    videoUrl,
    isLocked
  ) => {
    if (!isLocked) {
      setCurrentVideoUrl(videoUrl);
      setActiveChapter(chapIndex);
      setActiveModule(modulIndex);

      try {
        const updateTracker = await fetch(
          `https://befinalprojectbinar-production.up.railway.app/api/trackers/${courseId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              last_opened_chapter: chapIndex,
              last_opened_module: modulIndex,
              module_id: moduleId,
            }),
          }
        );
        if (updateTracker.ok) {
          console.log(`tracker ${moduleId} berhasil diupdate`);
          const { data } = await updateTracker.json();
          const firstDataObject = data[0];
          setTracker(firstDataObject);
          console.log("Data from response:", firstDataObject);
        } else {
          console.error(
            `Error create tracker ${moduleId}:`,
            updateTracker.status,
            updateTracker.statusText
          );
        }
      } catch (error) {
        console.error("Error create tracker:", error);
      }
    } else {
      openModal();
    }
  };

  useEffect(() => {
    const fetchTrackerData = async () => {
      if (token) {
        try {
          const response = await fetch(
            `https://befinalprojectbinar-production.up.railway.app/api/trackers/${courseId}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            const { data } = await response.json();
            console.log("respons from get", data);
            setTracker(data);
            if (data.last_opened_chapter == 0) {
              setIsOnBoardingOpen(true);
            }

            if (data.last_opened_chapter && data.last_opened_module) {
              const chapterIndex = data.last_opened_chapter;
              const moduleIndex = data.last_opened_module;

              const selectedChapter = chapterData.find(
                (chapter) => chapter.index === chapterIndex
              );

              if (selectedChapter) {
                const selectedModule = selectedChapter.modules.find(
                  (module) => module.index === moduleIndex
                );

                if (selectedModule) {
                  setCurrentVideoUrl(selectedModule.video);
                  setActiveModule(selectedModule.index);
                  setActiveChapter(selectedChapter.index);
                }
              }
            }
          }
        } catch (error) {
          console.error("Error fetching chapter data:", error);
        }
      }
    };
    fetchTrackerData();
  }, [courseId, token, chapterData]);

  return (
    <aside className="float-right w-[220px] lg:w-96 bg-white rounded-2xl shadow-md mr-0 lg:mr-32 ml-12 p-5 mt-10 lg:mt-20">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold hidden lg:block">Materi Belajar</h1>
        <div className="flex w-2/5 lg:gap-0 gap-2">
          {token ? (
            <>
              <BadgeCheckIcon className="w-6 stroke-green-400" />{" "}
              <ProgresBar progres={tracker.progress_course} />
            </>
          ) : null}
        </div>
      </div>

      {chapterData &&
        chapterData.map((chapter) => (
          <div key={chapter.id}>
            <div className="flex flex-row justify-between font-extrabold my-1 pt-3">
              <h4 className="text-indigo-600 text-[14px] lg:text-[16px] mr-3 lg:mr-0">{`Chapter ${chapter.index} - ${chapter.name}`}</h4>
              <h4 className="text-blue-400 text-[12px] lg:text-[14px]">{`${chapter.total_module_duration} Menit`}</h4>
            </div>
            {chapter.modules.map((module) => (
              <button
                key={module.id}
                className={`text-xs font-normal flex flex-row justify-between mt-0.5 pb-2 border-b-2 mt-3 w-full items-center`}
                onClick={() =>
                  handleModuleClick(
                    module.id,
                    chapter.index,
                    module.index,
                    module.video,
                    chapter.is_locked
                  )
                }
              >
                <div className="flex flex-row items-center">
                  <div className="w-9 h-9 bg-indigo-50 rounded-full flex items-center mr-3 justify-center font-bold">
                    {module.index}
                  </div>
                  {module.name}
                </div>
                {chapter.is_locked === false && (
                  <PlayIcon
                    className={`w-4 fill-green-400 ${
                      chapter.index === activeChapter &&
                      module.index === activeModule
                        ? "fill-indigo-600"
                        : "fill-green-400"
                    }`}
                  />
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
