type ContentProps = {
  index: number
  title: string
  content: string
  tags: string[]
}
const WorkBox = ({ index, title, content, tags }: ContentProps) => {
  const isEvenIndex = index % 2 === 0
  return (
    <div className="w-full ">
      {isEvenIndex ? (
        <div className="flex flex-col items-center self-stretch justify-center drop-shadow-md xl:flex-row">
          <div className="h-[256px] bg-[#F9FAFB] dark:bg-[#374151] rounded-t-xl border-b-[1px] border-solid dark:border-[#1F2937] xl:border-b-0 border-[#F3F4F6] max-w-[576px] mx-auto xl:mx-0 w-full xl:h-[480px] xl:rounded-l-xl xl:rounded-r-none"></div>
          <div className="xl:h-[480px] flex flex-col gap-6 p-8 xl:p-12 bg-white dark:bg-[#1F2937] h-auto max-h-[516px] rounded-b-xl max-w-[576px] mx-auto xl:mx-0 xl:rounded-r-xl xl:rounded-l-none">
            <h2 className="text-lg font-semibold dark:text-[#F9FAFB]">{title}</h2>
            <span className="text-base font-normal dark:text-[#D1D5DB]">{content}</span>
            <div className="flex flex-wrap gap-2 ">
              {tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="px-5 py-1 rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB] bg-[#E5E7EB] text-[#4B5563]"
                >
                  <p className="mx-auto text-center">{tag}</p>
                </div>
              ))}
            </div>
            <div>
              <ILocalWork></ILocalWork>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center self-stretch justify-center drop-shadow-md xl:flex-row-reverse">
          <div className="h-[256px] bg-[#F9FAFB] dark:bg-[#374151] rounded-t-xl border-b-[1px] border-solid dark:border-[#1F2937] xl:border-b-0 border-[#F3F4F6] max-w-[576px] mx-auto xl:mx-0 w-full xl:h-[480px] xl:rounded-r-xl xl:rounded-l-none"></div>
          <div className="xl:h-[480px] flex flex-col gap-6 p-8 xl:p-12 bg-white dark:bg-[#1F2937] h-auto max-h-[516px] rounded-b-xl max-w-[576px] mx-auto xl:mx-0 xl:rounded-l-xl xl:rounded-r-none">
            <h2 className="text-lg font-semibold dark:text-[#F9FAFB]">{title}</h2>
            <span className="text-base font-normal dark:text-[#D1D5DB]">{content}</span>
            <div className="flex flex-wrap gap-2 ">
              {tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="px-5 py-1 rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB] bg-[#E5E7EB] text-[#4B5563]"
                >
                  <p className="mx-auto text-center">{tag}</p>
                </div>
              ))}
            </div>
            <div>
              <ILocalWork></ILocalWork>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default WorkBox
