const axios = require('axios')
const fs = require('fs').promises

const BASE_URL = 'https://hacker-news.firebaseio.com/v0'
const topstories = () => `${BASE_URL}/topstories.json`
const item = id => `${BASE_URL}/item/${id}.json`

const readAndWriteItem = async id => {
  await axios.get(item(id)).then(res => res.data).then(data => console.log(data.title, data.score))
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
