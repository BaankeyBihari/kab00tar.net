let rsf = require('./.next/required-server-files.json')
rsf.appDir = process.cwd()
let fs = require('fs')
let rsfContent = JSON.stringify(rsf)
fs.writeFileSync('./.next/required-server-files.json', rsfContent, 'utf8', function (err) {
  if (err) {
    console.log('An error occured while writing JSON Object to File.')
    return console.log(err)
  }
  console.log('JSON file has been saved.')
})
