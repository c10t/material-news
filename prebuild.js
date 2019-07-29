const axios = require('axios')
const fs = require('fs').promises

const BASE_URL = 'https://hacker-news.firebaseio.com/v0'
const topstories = () => `${BASE_URL}/topstories.json`
const item = id => `${BASE_URL}/item/${id}.json`

const readAndWriteItem = async id => {
  console.log(`start: ${id}`)
  axios.get(item(id))
    .then(res => res.data)
    .then(data => ({ ...data, id: `${data.id}`, kids: data.kids.map(kid => `${kid}`) })) // "id" must be a string in Gatsby
    .then(data => JSON.stringify(data))
    .then(json => fs.writeFile(`${__dirname}/data/${id}.json`, json))
  console.log(`done : ${id}`)
}

const main = async () => {
  try {
    const stories = await axios.get(topstories())
    const top10 = stories.data.slice(0, 10)
    await Promise.all(top10.map(id => readAndWriteItem(id)))
  } catch (err) {
    throw err
  }
}

console.log(`prebuild script running from ${__dirname}`)
main().catch(err => {
  console.log('--- caught an error ---')
  console.log(err)
  process.exitCode = 1
})
