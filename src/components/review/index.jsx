import "./style.scss";
import PropTypes from "prop-types";

Review.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default function Review(props) {
  const { style } = props;

  return (
    <div className="slide" style={style}>
      <div className="user-avatar-wrapper">
        <img src={props.avatar} className="user-avatar" />
      </div>
      <div className="user-review-content">
        <div className="username">{props.username}</div>
        <div className="testimonial-stars">
          {Array(5).map((_, i) => (
            <span key={i} className="testimonial-star">
              <ion-icon className="star-icon" name="star" />
            </span>
          ))}
        </div>
        <div className="testimonial-text-container">
          <p className="testimonial-text">{props.comment}</p>
        </div>
      </div>
    </div>
  );
}
