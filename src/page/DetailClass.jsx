import {
  BookOpenIcon,
  ClockIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/outline";
import { Module, Navbar } from "../component";
import { ArrowLeftIcon, ChatAlt2Icon } from "@heroicons/react/solid";

const DetailClass = () => {
  const data = {
    status: "OK",
    message: "Get course by id success",
    data: {
      id: "5ec9d2c2-d8ca-44b2-9691-148ee1abba34",
      name: "Web Development 101",
      code: "WD1130",
      level: "Beginner",
      category: {
        category: "Web Development",
      },
      facilitator: "Harris s v",
      price: 7999999,
      type: "premium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      telegram_group: "https://t.me/+CgHkE3Xy4Dk5ZWM9",
      on_boarding:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      introduction_video: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      chapters: [
        {
          id: "5ec9d2c2-d8ca-44b2-9691-148ee1abba34",
          name: "introduction",
          index: 1,
          is_locked: false,
        },
      ],
      progres: "20%",
    },
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Module progres={data.data.progres} />

        <section className="bg-[#EBF3FC] pl-28 pt-8 pb-5 shadow">
          <span className="font-bold text-base">
            <a
              className="grid grid-flow-col auto-cols-max w-10 gap-4"
              href="/class"
            >
              <ArrowLeftIcon className="w-6" />
              <p>Kelas Lainnya</p>
            </a>
          </span>
          <div className="pl-6 pt-5">
            <p className="text-xl font-bold text-[#6148FF]">
              {data.data.category.category}
            </p>
            <p className="text-xl font-bold">{data.data.name}</p>
            <p className="text-sm font-normal">by {data.data.facilitator}</p>
            <div className="text-xs font-semibold flex gap-36 pt-[0.19rem]">
              <div className="flex items-center">
                <ShieldExclamationIcon className="stroke-green-500 w-3.5" />
                <p className="text-[#6148FF]">{data.data.level} Level</p>
              </div>
              <div className="flex items-center">
                <BookOpenIcon className="stroke-green-500 w-3.5" />
                <p className="">{data.data.code} Modul</p>
              </div>
              <div className="flex items-center">
                <ClockIcon className="stroke-green-500 w-3.5" />
                <p className="">{data.data.code} Menit</p>
              </div>
            </div>
            <span>
              <a
                className="flex mt-4 bg-[#73CA5C] font-bold text-base w-64 text-white justify-center rounded-3xl shadow-lg gap-2 py-1"
                href={data.data.telegram_group}
              >
                Join Grup Telegram
                <ChatAlt2Icon className="w-6" />
              </a>
            </span>
          </div>
        </section>

        <div className="pl-36 pr-7 w-8/12">
          <section className="py-8">
            <iframe
              className="aspect-video w-11/12 h-auto max-w-full border border-gray-200 rounded-3xl"
              src={data.data.introduction_video}
            ></iframe>
          </section>

          <section className="py-5">
            <h1 className="text-2xl font-bold">Tentang Kelas</h1>
            <p className="text-sm pt-3">{data.data.description}</p>
            <h1 className="text-2xl font-bold pt-4">
              Kelas Ini Ditujukan Untuk
            </h1>
            <p className="text-sm py-3">{data.data.description}</p>
          </section>
        </div>
      </main>
    </>
  );
};

export default DetailClass;
