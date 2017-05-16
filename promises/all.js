import pAll from 'p-all';
import remoteGitTags from 'remote-git-tags';

const repos = [
  'github.com/redux-saga/redux-saga',
  'github.com/facebook/react',
  'github.com/gaearon/redux-thunk',
  'github.com/avajs/ava',
  'github.com/hiddentao/linear-algebra',
  'github.com/angular/angular'
];

const gotTags = repos.map(repo => () => remoteGitTags(repo));

pAll(gotTags).then(result => {
  console.log(result);
});
