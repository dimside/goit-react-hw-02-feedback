import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <div>{message}</div>;
};

Notification.porpTypes = {
  message: PropTypes.string,
};
