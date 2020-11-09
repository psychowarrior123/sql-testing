const debug = require('debug');

const PREFIX = webpack.APP_NAME;

debug[webpack.IS_DEV_BUILD ? 'enabled' : 'disable'](`${PREFIX}:*`);

module.exports = (moduleName) => debug(`${PREFIX}:${moduleName}`);
