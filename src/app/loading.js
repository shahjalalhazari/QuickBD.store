import QuickbdLoading from "@/components/shared/QuickbdLoading";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1010]">
      <QuickbdLoading sizes="w-8 h-8 md:w-10 md:h-10"/>
    </div>
  )
}