/**
 * Share your Cucumber Report with your team at https://reports.cucumber.io
 *
 * Command line option:    --publish
 * Environment variable:   CUCUMBER_PUBLISH_ENABLED=true
 *
 * More information at https://cucumber.io/docs/cucumber/environment-variables/
 *
 * To disable this message up, add this to your ./cucumber.js:
 * module.exports = { default: '--publish-quiet' }
 */
 module.exports = {
   default:
     '--publish-quiet --format ./features/support/reporter.js:./dummy.txt',
 };
