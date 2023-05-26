import axios from "axios"
import {Buffer} from 'buffer'
import { WP_APPLICATION_PASSWORD } from './consts'

const instance = axios.create({
  baseURL: 'https://www.tremendaleyenda.com/wp-json/',
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Basic " + Buffer.from(`${'ErickDMH'}:${WP_APPLICATION_PASSWORD}`).toString("base64")
  },
});

// instance.interceptors.request.use(function (config) {
//   const auth = {
//     username: 'ErickDMH',
//     password: WP_APPLICATION_PASSWORD
//   }
//   config.headers.Authorization =  auth;
//   return config;
// });

export default instance;
