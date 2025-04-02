import ProjectCard from "./ProjectCard";

// MC scheduler
// game shop app
// something in C#
// flappy bird
// full spring project
// pytorch project

const works = [
  {
    imgSrc: "/images/melbourne_connect.jpeg",
    title: "Melbourne Connect Event Scheduler",
    tags: ["Web Application"],
    projectLink:
      "https://github.com/2024-SWN90017-18/MC-melbourneConnectScheduler",
    desc: "An event scheduler for Melbourne Connect to streamline the process of booking and managing guest speaking events, using ReactJS and Node.js",
  },
  {
    imgSrc: "/images/react.svg",
    title: "Participation Score Calculator",
    tags: ["Web Application"],
    projectLink: "https://github.com/nhtg0710/particpation-score-calculator",
    desc: "This calculator provides valuable insights to subject coordinators to boost student engagement, using ReactJS and Spring Boot",
  },
  {
    imgSrc: "/images/pytorch.svg",
    title: "Adversarial Image Detection",
    tags: ["Machine Learning"],
    projectLink:
      "https://github.com/2024-SWN90017-18/MC-melbourneConnectScheduler",
    desc: "This model leverages deep-learning models to identify adversarially modified images",
  },
  {
    imgSrc: "/images/flappy_bird.png",
    title: "Flappy Bird 3D",
    tags: ["Game Development"],
    projectLink:
      "https://www.youtube.com/watch?v=FtjqctPG9hg&ab_channel=GiangHo%C3%A0ng",
    desc: "A 3D version of the classic Flappy Bird game, developed using Unity and C#.",
  },
  // {
  //   imgSrc: "/images/project-1.jpg",
  //   title: "F1 Mobile App",
  //   tags: ["Development"],
  //   projectLink:
  //     "https://github.com/2024-SWN90017-18/MC-melbourneConnectScheduler",
  //   desc: "An event scheduler for Melbourne Connect to streamline the process of booking and managing guest speaking events.",
  // },
  // {
  //   imgSrc: "/images/project-1.jpg",
  //   title: "Telegram Trading Bot",
  //   tags: ["Development"],
  //   projectLink:
  //     "https://github.com/2024-SWN90017-18/MC-melbourneConnectScheduler",
  //   desc: "An event scheduler for Melbourne Connect to streamline the process of booking and managing guest speaking events.",
  // },
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
