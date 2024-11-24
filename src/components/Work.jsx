import ProjectCard from "./ProjectCard";

// MC scheduler
// game shop app
// something in C#
// flappy bird
// full spring project
// pytorch project

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
    desc: "A full stack music app",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink, desc }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
