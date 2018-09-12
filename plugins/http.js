import axios from 'axios' //引用axios

export default axios.create({
    baseURL: 'http://api.bitbee.io'
  })