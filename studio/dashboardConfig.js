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
                  buildHookId: '6034223f2ccafc34aec0e053',
                  title: 'Sanity Studio',
                  name: 'odyssey-sanity-gatsby-netlify-v-5-studio',
                  apiId: '0364c3c1-ce1c-4a3d-878b-afb4e5c007da'
                },
                {
                  buildHookId: '6034223f03bbd428e315917b',
                  title: 'Portfolio Website',
                  name: 'odyssey-sanity-gatsby-netlify-v-5',
                  apiId: '20dcd58a-5a8d-4d9d-856d-258c3dbea4af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jacob-Fromm/odyssey-sanity-gatsby-netlify-v5',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://odyssey-sanity-gatsby-netlify-v-5.netlify.app',
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
