import { useMutation } from "react-query";
import * as Auth from "../services/AuthServices";
export const useWeblogin = (FormData) => {
  return useMutation((FormData) => Auth.WebLogin(FormData));
};
export const useWebRegister = (formData) => {
  return useMutation((formData) => Auth.webRegister(formData));
};
