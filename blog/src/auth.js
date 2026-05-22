export const setAuthUser = (data) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user_id", data.user_id);
  localStorage.setItem("username", data.username);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUserId = () => {
  return localStorage.getItem("user_id");
};

export const getUsername = () => {
  return localStorage.getItem("username");
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  localStorage.removeItem("username");
};