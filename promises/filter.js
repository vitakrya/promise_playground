import pFilter from 'p-filter';
import remoteGitTags from 'remote-git-tags';
import ora from 'ora';

const repos = [
  'github.com/redux-saga/redux-saga',
  'github.com/gaearon/redux-thunk',
  'github.com/avajs/ava',
  'github.com/hiddentao/linear-algebra',
  'github.com/facebook/react',
  'github.com/ramda/ramda',
  'github.com/angular/angular',
  'github.com/emberjs/ember.js',
  'github.com/glimmerjs/glimmer-component'
];

const spinner = ora({
  text: 'Extracting repo tags...',
  spinner: 'pipe'
});
spinner.start();

const alphaContains = repo => remoteGitTags(repo).then(tags => {
  return [...tags.keys()].some(key => key.indexOf('alpha') > -1);
}).catch(err => console.log(err));

pFilter(repos, alphaContains).then(result => {
  spinner.succeed('Repos with alpha containing tags have been filtered');
  console.log(result);
}).catch(err => {
  spinner.warn('Error occured when filtering', err);
});
