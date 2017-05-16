import execa from 'execa';
import ora from 'ora';

const spinner = ora({
  text: 'Performing command...',
  spinner: 'dots6'
});
spinner.start();

execa('rvm', ['gemset', 'list']).then(result => {
  spinner.stopAndPersist({
    text: 'rvm gemset executed'
  });
  console.log(result.stdout);
});

execa('rvm', ['list']).then(result => {
  spinner.succeed('All performs');
  console.log(result.stdout);
});

