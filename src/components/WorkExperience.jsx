import WorkExperienceCard from "./WorkExperienceCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperiences = [
  {
    title: "Full-stack Software Engineer",
    company: "AccentedAI",
    duration: "Nov 2024 - Present",
    description:
      "Developing and maintaining web applications for language learners using React and Node.js.",
    logo: "/images/accented_logo.jpeg",
  },
  {
    title: "Full-stack Software Engineer",
    company: "AAkonsult Pty Ltd",
    duration: "Feb 2024 - Nov 2024",
    description:
      "Created Lightning Web Components for a major client's membership portal using Salesforce.",
    logo: "/images/aakonsult_logo.jpeg",
  },
  {
    title: "Full-stack Software Engineer",
    company: "VnLink",
    duration: "Nov 2023 - Feb 2024",
    description:
      "Developed backend services using Spring Boot for an intra-company task management system.",
    logo: "/images/vnlink_vn_logo.jpeg",
  },
];

const WorkExperience = () => {
  return (
    <section id="workExperience" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Experience</h2>
        <VerticalTimeline>
          {WorkExperiences.map((work, index) => (
            <VerticalTimelineElement
              key={index}
              date={work.duration}
              contentStyle={{
                background: "#18181b",
                color: "#fff",
                boxShadow: "none",
                border: "none",
              }}
              contentArrowStyle={{ borderRight: "7px solid #000" }}
              iconStyle={{ background: "#38bdf8", color: "#000" }}
              icon={
                <img
                  src={work.logo}
                  alt={`${work.company} logo`}
                  className="rounded-full object-contain"
                />
              }
            >
              <WorkExperienceCard
                title={work.title}
                company={work.company}
                description={work.description}
              />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkExperience;
