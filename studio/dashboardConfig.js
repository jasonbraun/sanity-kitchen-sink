export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eba430e975cef4d2913db1f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n5nekbje',
                  apiId: '115d2ba7-da6f-45b0-8d25-785b8cac8e79'
                },
                {
                  buildHookId: '5eba430ff30aa71035154fb5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9xg98a9h',
                  apiId: '3d0e58b2-54c7-4322-82f0-f3e805be0566'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasonbraun/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9xg98a9h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
