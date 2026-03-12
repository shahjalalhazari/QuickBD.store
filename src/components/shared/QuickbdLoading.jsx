import Image from "next/image";


const QuickbdLoading = ({customSize}) => {
  return (
    <Image src={"/loading.gif"} width={24} height={24} alt="loading" className={`${customSize}`} />
  );
};

export default QuickbdLoading;