/* eslint-env node */

const isRunningInTravis = process.env.TRAVIS === 'true';
const launch_in_ci = ['PhantomJS'];

if (isRunningInTravis) {
  launch_in_ci.push('Chrome');
  launch_in_ci.push('Firefox');
}

module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci,
  launch_in_dev: [
    'PhantomJS',
    'Chrome'
  ],
  browser_args: {
    Firefox: {
      mode: 'ci',
      args: ['-headless']
    },
    Chrome: {
      mode: 'ci',
      args: [
        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=9222',
        '--window-size=1440,900'
      ]
    }
  }
};
