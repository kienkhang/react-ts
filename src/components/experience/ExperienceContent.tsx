import dayjs from 'dayjs'
type ContentProps = {
  startTime: string
  endTime: string
  title: string
  content: string
}

const ExperienceContent = ({ startTime, endTime, title, content }: ContentProps) => {
  const contentArray = content.split('.')
  return (
    <div className=" p-8 flex flex-col items-start  bg-white rounded-xl shadow-md gap-4 dark:bg-[#1F2937] dark:shadow-2xl xl:grid xl:grid-flow-col xl:gap-12 max-w-[832px] ">
      <div className="">
        <ILocalUpwork className=" w-[102px] h-7"></ILocalUpwork>
      </div>
      <div className=" flex flex-col gap-4 xl:flex-row-reverse xl:gap-12 ">
        <div className=" text-base font-normal text-[#374151] dark:text-[#E5E7EB]">
          {dayjs(startTime).format('MMM YYYY') +
            ' - ' +
            (dayjs(endTime).format('MMM YYYY') != 'Invalid Date'
              ? dayjs(endTime).format('MMM YYYY')
              : 'Present')}
        </div>
        <div className="">
          <div className=" text-lg font-semibold text-[#111827] dark:text-white ">{title}</div>
          <div className=" text-base font-normal text-[#4B5563] self-stretch">
            <ul className=" flex flex-col gap-1">
              {contentArray.map(
                (sentences, index) =>
                  sentences.trim() !== '' && (
                    <li
                      key={index}
                      className=" text-base font-normal text-[#4B5563] dark:text-[#D1D5DB] "
                    >
                      • {sentences.trim() + '.'}
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceContent
