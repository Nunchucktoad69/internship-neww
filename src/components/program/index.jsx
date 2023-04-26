import PropTypes from "prop-types";
import "./style.scss";

Program.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default function Program(props) {
  const planNum = `${props.index + 1}`.padStart(2, "0");

  return (
    <div className="program-box">
      <div className="program-img-box">
        <img src={props.image} className="program-img" alt="woman squatting" />
      </div>

      <div className="program-text-box">
        <div className="program-heading-box">
          <p className="program-number">{planNum}</p>
          <p className="heading-tertiary">{props.title}</p>
        </div>
        <p className="program-description">{props.desc}</p>
      </div>
    </div>
  );
}
