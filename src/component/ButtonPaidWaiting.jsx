import { LightningBoltIcon } from "@heroicons/react/solid";

const ButtonPaidWaiting = () => {
  return (
    <a
      className="flex flex-row bg-[#3578ff] mt-0.5 px-3 py-0.5 gap-0.5 max-w-max rounded-2xl"
      href="/#"
    >
      <LightningBoltIcon className="w-[0.75rem] text-white" />
      <div className="text-[0.625rem]/[0.875rem] font-bold text-white flex flex-row gap-5">
        <p>Waiting For Payment</p>
      </div>
    </a>
  );
};

export default ButtonPaidWaiting;
