const Footer = () => {
  return (
    <div className=" flex flex-row gap-2 justify-center">
      <div className="">
        <ILocalIconfooter className=" w-4 h-4 dark:fill-[white]" />
      </div>
      <div className="">
        <p className=" dark:bg-[#111827] text-sm font-normal dark:text-[#D1D5DB] text-[#4B5563] ">
          2023 |{' '}
          <a href="https://www.figma.com/@shahsagarm" className=" underline">
            Designed
          </a>{' '}
          and{' '}
          <a href="https://github.com/shahsagarm/sagarshah.dev" className=" underline">
            coded{' '}
          </a>
          with ❤️️ by Sagar Shah
        </p>
      </div>
    </div>
  )
}

export default Footer
