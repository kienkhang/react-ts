const AboutMeContent = () => {
  return (
    <div className="about-me">
      <div className="w-full mb-6">
        <h2 className="text-2xl font-semibold">Curious about me? Here you have it:</h2>
      </div>
      <div className="w-full">
        <div className="mb-4">
          <span className="text-base font-normal dark:text-[#D1D5DB] ">
            I'm a passionate,{' '}
            <a href="" className="underline cursor-pointer">
              self-proclaimed designer
            </a>{' '}
            who specializes in full stack development (React.js & Node.js). I am very enthusiastic
            about bringing the technical and visual aspects of digital products to life. User
            experience, pixel perfect design, and writing clear, readable, highly performant code
            matters to me.
          </span>
        </div>
        <div className="mb-4">
          <span className="text-base font-normal dark:text-[#D1D5DB] ">
            I began my journey as a web developer in 2015, and since then, I've continued to grow
            and evolve as a developer, taking on new challenges and learning the latest technologies
            along the way. Now, in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern technologies such as
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
          </span>
        </div>
        <div className="mb-4">
          <span className="text-base font-normal dark:text-[#D1D5DB]">
            When I'm not in full-on developer mode, you can find me hovering around on twitter or on
            indie hacker, witnessing the journey of early startups or enjoying some free time. You
            can follow me on{' '}
            <a href="" className="underline cursor-pointer">
              Twitter
            </a>{' '}
            where I share tech-related bites and build in public, or you can follow me on{' '}
            <a href="" className="underline cursor-pointer">
              Github
            </a>{' '}
            .
          </span>
        </div>
        <div className="mb-4">
          <span className="text-base font-normal dark:text-[#D1D5DB]">
            Finally, some quick bits about me.
          </span>
        </div>
        <div className="grid self-stretch grid-cols-2 gap-4 pl-8 mb-4">
          <ul className="list-disc text-base font-normal dark:text-[#D1D5DB]">
            <li>B.E. in Computer Engineering</li>
            <li>Full time freelancer</li>
          </ul>
          <ul className="list-disc text-base font-normal dark:text-[#D1D5DB]">
            <li>Avid learner</li>
            <li>Aspiring indie hacker</li>
          </ul>
        </div>
        <div className="mb-4">
          <span className="text-base font-normal dark:text-[#D1D5DB]">
            One last thing, I'm available for freelance work, so feel free to reach out and say
            hello! I promise I don't bite 😉
          </span>
        </div>
      </div>
    </div>
  )
}
export default AboutMeContent
