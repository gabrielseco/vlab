/* eslint-disable */
const { Component, SCSSDefaultParser, PrettierParser } = require('genmite');

class ReactStatelessComponent extends Component {
  constructor(destinationFolder, componentFolder, config) {
    super(destinationFolder, componentFolder, config);
  }

  init() {
    const jsType = {
      fileExtension: '.js',
      parser: new PrettierParser()
    };

    const specType = {
      fileExtension: '.spec.js',
      parser: new PrettierParser()
    };

    const scssType = {
      fileExtension: '.scss',
      parser: SCSSDefaultParser()
    };
    const component = this.getComponentFolder();
    this.add(jsType, this.defaultReactComponent(component));
    this.add(specType, this.defaultSpec(component));
    this.add(scssType, this.defaultSCSS(component));
    this.add(jsType, this.defaultIndex(component), 'index');
  }

  defaultReactComponent(component) {
    return `
      import React from 'react';
      import PropTypes from 'prop-types';
      import styles from './${component}.scss';
      
      const ${component} = () => (
        <div>
          <h2>${component} Stateful Component generated from the cli</h2>
        </div>
      );
      
      ${component}.propTypes = {};
      
      export default ${component};
    `;
  }

  defaultSpec(component) {
    return `
      import React from 'react';
      import { shallow } from 'enzyme';
      
      import ${component} from './${component}';
      
      describe('${component} suite', () => {
        it('should render the ${component} component', () => {
          const component = shallow(<${component} />);
          expect(component).toBeDefined();
        });
      });
    `;
  }

  defaultIndex(component) {
    return `
      export { default as ${component} } from './${component}';
    `;
  }

  defaultSCSS(component) {
    return `
      .${component}{}
    `;
  }
}

module.exports = ReactStatelessComponent;
