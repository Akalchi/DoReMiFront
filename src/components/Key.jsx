import PropTypes from "prop-types";

const Key = ({ id, isActive, onClick }) => {
  const keyType = id.includes("b") ? "black-key" : "white-key";
  const classes = `${keyType} ${isActive ? "active" : ""} ${id}`;

  return <button className={classes} id={id} onClick={onClick}></button>;
};

Key.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Key;
