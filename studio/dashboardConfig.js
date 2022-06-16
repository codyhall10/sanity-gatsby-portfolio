export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '62ab62bafde57204cdfd9f1c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kyymw1jz',
                  apiId: '87f17fbe-4f95-4b84-a5db-9a98de92cdea'
                },
                {
                  buildHookId: '62ab62bad57211007bda7913',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-968nyeh6',
                  apiId: '564de716-aedd-4d8e-b50a-5a33f6dc295b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codyhall10/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-968nyeh6.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
