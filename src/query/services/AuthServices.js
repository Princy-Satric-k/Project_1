import WgServer from "../../Axios";
const WebLogin = async (formData) => {
  const { data } = await WgServer.post(`/login`, formData);
  return data;
};
const webRegister = async (formData) => {
  const { data } = await WgServer.post(`/register`, formData);
  return data;
};
export { WebLogin, webRegister };
