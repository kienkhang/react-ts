type TitleProps = {
  title: string
  subtitle: string
}
const SharedTitleSection = ({ title, subtitle }: TitleProps) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <div className=" py-1 px-5 text-sm font-medium bg-[#E5E7EB] text-[#4B5563] rounded-xl">
        {title}
      </div>
      <div className=" text-lg font-normal text-[#4B5563] max-w-xl text-center  dark:text-[#D1D5DB] ">
        {subtitle}
      </div>
    </div>
  )
}

export default SharedTitleSection
