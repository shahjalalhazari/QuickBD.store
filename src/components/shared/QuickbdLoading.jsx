import Image from "next/image";


const QuickbdLoading = ({sizes="w-5 h-5 md:w-6 md:h-6"}) => {
  return (
    <div className={`flex items-center justify-center w-full`}>
      <Image 
        src={"/loading.gif"} width={20} height={20} 
        alt="loading" 
        className={`${sizes}`} 
      />
    </div>
  );
};

export default QuickbdLoading;