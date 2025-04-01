import PropTypes from "prop-types";

const WorkExperienceCard = ({ title, company, duration, description }) => {
  return (
    <>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-zinc-400 italic">{company}</p>
      <p className="text-sm text-gray-500 italic">{duration}</p>
      <p className="mt-2 text-sm text-zinc-400">{description}</p>
    </>
  );
};

WorkExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default WorkExperienceCard;
