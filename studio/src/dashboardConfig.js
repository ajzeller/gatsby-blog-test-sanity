export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e5b293847370f9877b04b7c',
                  title: 'Sanity Studio',
                  name: 'gatsby-blog-test-sanity-studio',
                  apiId: '88dc08b1-c5c6-4089-800b-c1f12ee6cc14'
                },
                {
                  buildHookId: '5e5b2938777f249c851ec3fb',
                  title: 'Blog Website',
                  name: 'gatsby-blog-test-sanity',
                  apiId: '3d0a848f-ac73-4586-acc0-906fb337026b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajzeller/gatsby-blog-test-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsby-blog-test-sanity.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
