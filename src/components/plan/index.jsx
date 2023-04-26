import "./style.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

Plan.propTypes = {
  featured: PropTypes.bool,
  duration: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};

export default function Plan(props) {
  return (
    <div className={classNames("plan", { "plan-rec": props.featured })}>
      <div className="plan-flex">
        <p className="plan-type">{props.duration}</p>
        <p className="plan-cost">
          <span className="plan-rs">₹</span>
          {props.cost}
        </p>
        <p className="plan-about">{props.desc}</p>
        <a href="#" className="plan-btn btn btn--full">
          buy now
        </a>
      </div>
    </div>
  );
}
