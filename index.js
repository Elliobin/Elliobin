const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
const progressBarCapacity = 30
const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
const progressBar =
'█'.repeat(passedProgressBarIndex) +
'▁'.repeat(progressBarCapacity - passedProgressBarIndex)
return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

![Time bat](https://img.shields.io/badge/TimeBar-v1.0-red.svg)\

---

`

console.log(readme)
