module.exports = function (plop) {
    plop.setGenerator('page', {
        description: 'Generate new tsx react FC page',
        prompts: [
            {
                type: 'input',
                name: 'title',
                message: 'Name of FC page?'
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
                template: 'import {{properCase title}} from \'./{{properCase title}}/{{properCase title}}\''
            },
            {
                type: 'append',
                path: 'src/App.tsx',
                pattern: /\{\/\* COMPONENT ROUTES \*\/\}$/gm,
                template: '          <Route path=\'/{{snakeCase title}}\' element={<{{properCase title}} />}/>'
            },
            {
                type: 'append',
                path: 'src/Navigation/Navigation.tsx',
                pattern: /\{\/\* COMPONENT LINKS \*\/\}$/gm,
                template: '          <NavLink className={s.link} to=\'{{snakeCase title}}\'>{{properCase title}}</NavLink>'
            }
        ]
    });
    plop.setGenerator('component', {
        description: 'Generate new tsx react FC component',
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
                path: 'src/components/{{properCase title}}/{{properCase title}}.tsx',
                templateFile: '_templates/functionalComponent.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{properCase title}}/{{camelCase title}}.module.sass',
                templateFile: '_templates/styleSass.hbs'
            }
        ]
    });
};