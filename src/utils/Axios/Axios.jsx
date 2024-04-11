import axios, { Axios } from "axios";

const api = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: ProcessingInstruction.env.STATIC_URL_BACKEND
  })

export default api;