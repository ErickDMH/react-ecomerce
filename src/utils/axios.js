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

export default instance;
