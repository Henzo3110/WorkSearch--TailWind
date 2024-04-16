import axios from 'axios'

const api = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: import.meta.env.URL_BACKEND,
  })

export default api;