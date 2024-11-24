import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "Machine Learning",
  },
  {
    imgSrc: "/images/pytorch.svg",
    label: "PyTorch",
    desc: "Deep Learning",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/ts.svg",
    label: "TypeScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/java.svg",
    label: "Java",
    desc: "Application",
  },
  {
    imgSrc: "/images/spring-boot.svg",
    label: "Spring Boot",
    desc: "Java Framework",
  },
  {
    imgSrc: "/images/dotnet.svg",
    label: ".Net",
    desc: "Application",
  },
  {
    imgSrc: "images/docker.svg",
    label: "Docker",
    desc: "Containerisation",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        {/* //TODO explain the grid-cols thing below */}
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal_up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
