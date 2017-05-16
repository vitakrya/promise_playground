import remoteGitTags from 'remote-git-tags';
import boxen from 'boxen';

const repo = 'ember.js';

console.log(boxen(repo, {
  padding: 13,
  borderStyle: 'double',
  borderColor: 'blue',
  float: 'center'
}));


remoteGitTags(`github.com/emberjs/${repo}`)
  .then(tags => {
    console.log('tags', tags);
  })
  .catch(err => {
    console.log(err);
  });
