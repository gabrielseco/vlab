/* eslint-disable */
const { Component, SCSSDefaultParser, PrettierParser } = require('genmite');

class ReactStatefulComponent extends Component {
  constructor(destinationFolder, componentFolder) {
    super(destinationFolder, componentFolder);
  }

  init() {
    const prettierParser = new PrettierParser();
    const jsType = {
      fileExtension: '.js',
      parser: prettierParser
    };

    const specJsType = {
      fileExtension: '.spec.js',
      parser: prettierParser
    };

    const scssType = {
      fileExtension: '.scss',
      parser: SCSSDefaultParser()
    };

    const componentFolder = this.getComponentFolder();

    this.add(jsType, this.defaultReactIndex(componentFolder), 'index');
    this.add(jsType, this.defaultReactJS(componentFolder));
    this.add(scssType, this.defaultReactSCSS(componentFolder));
    this.add(specJsType, this.defaultReactSpec(componentFolder));
  }

  defaultReactJS(component) {
    return `
      import React, { Component } from 'react'
      import PropTypes from 'prop-types'
      import styles from './${component}.scss'

      class ${component} extends Component {
        constructor(props) {
          super(props);
          this.state = {};
        }

        render() {
          return (
            <div>
              <h2>${component} Stateful Component generated from the cli</h2>
            </div>
          );
        }
      }

      ${component}.propTypes = {};

      export default ${component};
    `;
  }

  defaultReactSCSS(component) {
    return `
      .${component}{}
    `;
  }

  defaultReactIndex(component) {
    return `
      export { default as ${component} } from './${component}';
    `;
  }

  defaultReactSpec(component) {
    return `
      import React from 'react';
      import { shallow } from 'enzyme';
      import { ${component} } from './${component}';

      describe('${component} suite', () => {
        it('renders ${component} without any state injected', () => {
          const component = shallow(<${component} />);
          expect(component).toBeDefined();
        });
      });
    `;
  }
}

module.exports = ReactStatefulComponent;
