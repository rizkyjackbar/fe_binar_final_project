import { CashIcon } from "@heroicons/react/outline";

const ButtonBuy = ({ price }) => {
  return (
    <a
      className="flex flex-row bg-[#489CFF] mt-0.5 px-3 py-0.5 gap-0.5 max-w-max rounded-2xl z-10"
      href="/#"
    >
      <CashIcon className="w-[0.75rem] text-white" />
      <div className="text-[0.625rem]/[0.875rem] font-bold text-white flex flex-row gap-5">
        <p>Beli</p>
        <p>Rp {price}</p>
      </div>
    </a>
  );
};

export default ButtonBuy;
