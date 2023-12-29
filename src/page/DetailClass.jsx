import {
  BookOpenIcon,
  ClockIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/outline";
import { ModalOnBoarding, Module, Navbar } from "../component";
import { ArrowLeftIcon, ChatAlt2Icon } from "@heroicons/react/solid";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalBuy from "../component/ModalBuy";

const DetailClass = () => {
  const { id } = useParams();
  const [classData, setClassData] = useState(null);
  const [chapterData, setChapterData] = useState([]);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seProgress, setSePogress] = useState(false);
  const [isOnBoardingOpen, setIsOnBoardingOpen] = useState(false);

  const token = localStorage.getItem("accessToken");

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await fetch(
            `https://befinalprojectbinar-production.up.railway.app/api/courses/${id}`
          );

          if (response.ok) {
            const { data } = await response.json();
            setClassData(data);
            setCurrentVideoUrl(data.introduction_video);

            if (data?.chapters?.length > 0) {
              const fetchedChapters = await Promise.all(
                data.chapters.map((chapter) => fetchChapterData(chapter.id))
              );
              setChapterData(fetchedChapters);
            }
          } else {
            console.error(
              "Error fetching data:",
              response.status,
              response.statusText
            );
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    const fetchChapterData = async (chapterId) => {
      try {
        const headers = {};

        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }
        const response = await fetch(
          `https://befinalprojectbinar-production.up.railway.app/api/chapters/${chapterId}`,
          {
            method: "GET",
            headers,
          }
        );

        if (response.ok) {
          const { data } = await response.json();

          return data;
        } else {
          console.error(
            "Error fetching chapter data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching chapter data:", error);
      }
    };

    fetchData();
  }, [id, token]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className=" -ml-[90px] lg:ml-0">
        <div className=" hidden lg:block">
          <Module
            courseId={id}
            chapterData={chapterData}
            setCurrentVideoUrl={setCurrentVideoUrl}
            openModal={openModal}
          />
        </div>
        {classData && (
          <>
            <section className="bg-[#EBF3FC] pl-28 pt-8 pb-5 shadow">
              <span className="font-bold text-base">
                <Link
                  className="grid grid-flow-col auto-cols-max w-10 gap-4"
                  to="/class"
                >
                  <ArrowLeftIcon className="w-6" />
                  <p>Kelas Lainnya</p>
                </Link>
              </span>
              <div className="pl-6 pt-5">
                <button
                  onClick={() => setSePogress(!seProgress)}
                  className=" block lg:hidden float-right mr-5 bg-[#6148FF] w-[130px] h-[40px] rounded-lg text-white font-medium"
                >
                  Lihat Progres
                </button>
                <div
                  className={`float-right w-[200px] z-30 absolute mt-6 right-0 h-auto ${
                    seProgress ? "hidden" : "block"
                  } lg:hidden`}
                >
                  <Module
                    courseId={classData.id}
                    chapterData={chapterData}
                    setCurrentVideoUrl={setCurrentVideoUrl}
                    openModal={openModal}
                    setIsOnBoardingOpen={setIsOnBoardingOpen}
                  />
                </div>
                <p className="text-xl font-bold text-[#6148FF]">
                  {classData.category.category}
                </p>
                <p className="text-xl font-bold">{classData.name}</p>
                <p className="text-sm font-normal">
                  by {classData.facilitator}
                </p>
                <div className="text-xs font-semibold flex gap-5 lg:gap-36 pt-[0.19rem]">
                  <div className="flex items-center">
                    <ShieldExclamationIcon className="stroke-green-500 w-3.5" />
                    <p className="text-[#6148FF]">{classData.level} Level</p>
                  </div>
                  <div className="flex items-center">
                    <BookOpenIcon className="stroke-green-500 w-3.5" />
                    <p className="">{classData.total_chapter} Modul</p>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="stroke-green-500 w-3.5" />
                    <p className="">{classData.total_duration} Menit</p>
                  </div>
                </div>
                <span
                  className={token ? "cursor-pointer" : "pointer-events-none"}
                >
                  <a
                    className="flex mt-4 bg-[#73CA5C] font-bold text-base w-64 text-white justify-center rounded-3xl shadow-lg gap-2 py-1"
                    href={classData.telegram_group}
                  >
                    Join Grup Telegram
                    <ChatAlt2Icon className="w-6" />
                  </a>
                </span>
              </div>
            </section>

            <div className="pl-36 lg:w-8/12 -ml-6">
              <section className="py-8 w-[93%] lg:w-[660px]">
                <ReactPlayer
                  url={currentVideoUrl}
                  controls
                  width={"auto"}
                  height={300}
                />
              </section>

              <section className="py-0 lg:py-5">
                <h1 className="text-2xl font-bold">Tentang Kelas</h1>
                <p className="text-sm pt-3 mr-5 pg:mr-0">
                  {classData.description}
                </p>
              </section>
            </div>
            <ModalBuy
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              id={classData.id}
              category={classData.category.category}
              name={classData.name}
              img={classData.category.image}
              facilitator={classData.facilitator}
              level={classData.level}
              modul={chapterData.total_chapter}
              duration={chapterData.total_duration}
            />
            <ModalOnBoarding
              isOpen={isOnBoardingOpen}
              onClose={() => setIsOnBoardingOpen(false)}
              field={classData.on_boarding}
            />
          </>
        )}
      </main>
    </>
  );
};

export default DetailClass;
