type Message = {
  type: string;
  message: string;
};

export default Message;

export const ok = (msg: string): Message => {
  return {
    type: "OK",
    message: msg,
  };
};

export const warn = (msg: string): Message => {
  return {
    type: "WARN",
    message: msg,
  };
};

export const error = (msg: string): Message => {
  return {
    type: "ERROR",
    message: msg,
  };
};
