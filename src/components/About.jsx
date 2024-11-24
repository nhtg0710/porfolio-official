const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Biggest client",
    number: "Melbourne Connect",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
            Welcome! I&apos;m Zac, an aspiring software developer. As a Masters
            of Software Engineering student specialising in security, I have a
            passion for building visually appealing and highly functional
            digital solutions that blend creativity with precision. From secure
            and robust backends to intuitive frontends, I transform your ideas
            into reality.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key} className="m-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center md:mb-2">
                    <span className="text-2xl font-bold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>

                  <p className="text-sm text-zinc-400 items-center justify-center">
                    {label}
                  </p>
                </div>
              </div>
            ))}
            {/* <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
