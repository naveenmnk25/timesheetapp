import { message } from "antd";

// Configure the message to appear at the top right corner
message.config({
  top: 50,
  duration: 3,
  maxCount: 1,
});

export const showMessage = (type, content) => {
  switch (type) {
    case 'success':
      message.success(content);
      break;
    case 'error':
      message.error(content);
      break;
    case 'info':
      message.info(content);
      break;
    case 'warning':
      message.warning(content);
      break;
    default:
      message.info(content);
  }
};