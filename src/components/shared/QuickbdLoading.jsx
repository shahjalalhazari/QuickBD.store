import Image from "next/image";


const QuickbdLoading = ({customSize="w-5 h-5 md:w-6 md:h-6"}) => {
  return (
    <div className={`flex items-center justify-center w-full ${customSize}`}>
      <Image 
        src={"/loading.gif"} width={20} height={20} 
        alt="loading" 
        className={"w-auto h-auto"} 
      />
    </div>
  );
};

export default QuickbdLoading;