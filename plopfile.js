
module.exports = function (plop) {
  plop.setGenerator('module', {
    description: 'Generate new tsx react FC module',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Name of FC?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{properCase title}}/{{properCase title}}.tsx',
        templateFile: '_templates/functionalComponent.hbs'
      },
      {
        type: 'add',
        path: 'src/{{properCase title}}/{{camelCase title}}.module.sass',
        templateFile: '_templates/styleSass.hbs'
      },
      {
        type: 'append',
        path: 'src/App.tsx',
        pattern: /(\/\/ COMPONENT IMPORTS)/g,
        template: 'import {{properCase title}} from \'./{{properCase title}}/{{properCase title}}\';'
      }
    ]
  })
}