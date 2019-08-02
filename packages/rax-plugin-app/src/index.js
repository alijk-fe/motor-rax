const chalk = require('chalk');

module.exports = ({ chainWebpack, registerConfig, rootDir, onHook }, options = {}) => {
  const { targets = [] } = options;

  targets.forEach(target => {
    if (target === 'weex' || target === 'web') {
      const getBase = require(`./config/${target}/getBase`);
      const setDev = require(`./config/${target}/setDev`);
      const setBuild = require(`./config/${target}/setBuild`);

      registerConfig(target, getBase(rootDir));

      chainWebpack((config, { command }) => {
        if (command === 'dev') {
          setDev(config.get(target), rootDir);
        }

        if (command === 'build') {
          setBuild(config.get(target), rootDir);
        }
      });

      if (target === 'weex') {
        onHook('after.dev', ({url}) => {
          console.log(chalk.green('[Weex] Starting the development server at:'));
          console.log('   ', chalk.underline.white(`${url}/weex/index.js?wh_weex=true`));
        });
      }
    }
  });
};
