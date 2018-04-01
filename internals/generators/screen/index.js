'use strict';

const { Author, Email } = require('../config');

module.exports = {
  description: 'Tạo màn hình mới',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Nhập tên màn hình. Enter để chọn default?',
      default: 'Home'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Bạn là người tạo màn hình này?',
      default: Author
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email của bạn là gì?',
      default: Email
    },
    {
      type: 'confirm',
      name: 'hasLanguage',
      default: true,
      message: 'Bạn có muốn tạo language?',
    },
    {
      type: 'confirm',
      name: 'hasMultiScreen',
      default: false,
      message: 'Bạn có muốn hỗ trợ đa màn hình?',
    },
    {
      type: 'confirm',
      name: 'hasRedux',
      default: false,
      message: 'Bạn có muốn tích hợp redux?',
    }
  ],
  actions: (data) => {
    const actions = [
      // {
      //   type: 'add',
      //   path: '../../src/containers/{{lowerCase name}}/index.js',
      //   templateFile: './screen/container.js.hbs',
      //   abortOnFail: true,
      // }
    ];

    if (data.hasMultiScreen) {
      actions.push(
        {
          type: 'add',
          path: '../../src/screens/{{lowerCase name}}/index-portrait.js',
          templateFile: './screen/view.js.hbs',
          abortOnFail: true,
        }
      )
      actions.push(
        {
          type: 'add',
          path: '../../src/screens/{{lowerCase name}}/index-landscape.js',
          templateFile: './screen/view.js.hbs',
          abortOnFail: true,
        }
      )
    } else {
      actions.push(
        {
          type: 'add',
          path: '../../src/screens/{{lowerCase name}}/index.js',
          templateFile: './screen/view.js.hbs',
          abortOnFail: true,
        }
      )
    }

    if (data.hasRedux) {
      actions.push(
        {
          type: 'add',
          path: '../../src/reducers/{{lowerCase name}}.js',
          templateFile: './screen/reducer.js.hbs',
          abortOnFail: true,
        }
      )
      actions.push({
        type: 'modify',
        path: '../../src/sagas/index.js',
        pattern: /(effects';\n)(?!.*import')/g,
        templateFile: './screen/saga-import.js.hbs',
      })
      actions.push({
        type: 'modify',
        path: '../../src/sagas/index.js',
        pattern: /(all\(\[\n)(?!.*...')/g,
        templateFile: './screen/saga-used.js.hbs',
      })
      actions.push(
        {
          type: 'add',
          path: '../../src/actions/{{lowerCase name}}.js',
          templateFile: './screen/action.js.hbs',
          abortOnFail: true,
        }
      )
      actions.push(
        {
          type: 'add',
          path: '../../src/sagas/{{lowerCase name}}.js',
          templateFile: './screen/saga.js.hbs',
          abortOnFail: true,
        }
      )
      actions.push(
        {
          type: 'modify',
          path: '../../src/reducers/index.js',
          pattern: /(combineReducers\(\{\n)(?!.*\n')/g,
          templateFile: './screen/reducer-used.js.hbs',
        }
      )
      actions.push(
        {
          type: 'modify',
          path: '../../src/reducers/index.js',
          pattern: /('redux';\n)(?!.*import')/g,
          templateFile: './screen/reducer-import.js.hbs',
        }
      )
    }
    if (data.hasLanguage) {
      actions.push(
        {
          type: 'add',
          path: '../../src/languages/{{lowerCase name}}.js',
          templateFile: './screen/language.js.hbs',
          abortOnFail: true,
        }
      )
      actions.push(
        {
          type: 'modify',
          path: '../../src/languages/index.js',
          pattern: /(configlang = \[\n)(?!.*\n')/g,
          templateFile: './screen/language-used.js.hbs',
        }
      )
    }

    return actions;
  },
};
