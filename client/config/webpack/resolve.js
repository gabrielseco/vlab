const path = require('path');

const SRC = path.join(__dirname, '../../src');

const resolve = {
  alias: {
    adapters: path.join(SRC, 'adapters'),
    components: path.join(SRC, 'components'),
    config: path.join(SRC, 'config'),
    containers: path.join(SRC, 'containers'),
    flow: path.join(SRC, 'flow'),
    services: path.join(SRC, 'services'),
    styles: path.join(SRC, 'styles'),
    utils: path.join(SRC, 'utils')
  }
};

module.exports = resolve;
