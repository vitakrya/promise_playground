import hasha from 'hasha';

hasha.fromFile('fi1.txt', {algorithm: 'sha512'}).then(hash => {
  console.log(`h => ${hash}`);
}).catch(err => console.log(err));

hasha.fromFile('fi1.txt', {algorithm: 'sha256'}).then(hash => {
  console.log(`h => ${hash}`);
}).catch(err => console.log(err));
