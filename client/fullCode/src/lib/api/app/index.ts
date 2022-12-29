import axios  from "axios"
export default axios.create({
  baseURL: 'https://theonlyfastcoder2.github.io/jsonapi/database.json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    "content-type":"application/json",
  }
});
