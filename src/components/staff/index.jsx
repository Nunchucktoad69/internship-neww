import PropTypes from "prop-types";

Staff.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desig: PropTypes.string.isRequired,
};

export default function Staff(props) {
  return (
    <div className="staff-element">
      <img className="about-img" src={props.image} alt={props.name} />
      <span className="staff-name">{props.name}</span>
      <span className="staff-prof">{props.desig}</span>
    </div>
  );
}
