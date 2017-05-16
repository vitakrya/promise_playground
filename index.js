import pSeries from 'p-series';
import got from 'got';
import writeJsonFile from 'write-json-file';
import path from 'path';
import fs from 'fs';
import ora from 'ora';

const spinner = ora({text: 'Loading spinners', spinner: 'circleHalves'}).start();

const tasks = [
  () => got('sindresorhus.com'),
  () => got('http://api.fixer.io/latest'),
  () => got('https://davidwalsh.name'),
  () => got('https://nodejs.org'),
  () => got('https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json')
];

pSeries(tasks).then(result => {
  spinner.stop();
  result.map((item, i) => {
    fs.writeFileSync(`file_number_${i}.txt`, item.body + "\n" + JSON.stringify(item.headers) + "\n" + JSON.stringify(item.requestUrl));

    console.log(`${i} writed`);
    // writeJsonFile(path.join(__dirname, 'results', `res_${i}.json`), item.body).then(() => {
      // console.log('have been written');
    // }).catch(err => console.log(err));
  });
}).catch(err => console.log('err', err));
