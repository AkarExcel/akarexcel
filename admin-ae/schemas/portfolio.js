export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        title: "Date of Delivery",
        name: 'date',
        type: "datetime"
      },
      {
        name: "client",
        type: "string"
      },
      {
        name: "firm",
        type: "string"
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 150,
        },
      },
      {
        name: "description",
        type: "text"
      },
      {
        name: 'portfolioImage',
        title: 'Portfolio image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'gallery',
        title: 'Image Gallery',
        type: 'array',
        of: [
          {
            type: 'image'
          },
          {
            title: 'URL',
            name: 'urlObject',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'urlField',
                type: 'url'
              }
            ]
          }
        ]
      },
      {
        name: 'link',
        type: 'url'
      },
      {
        title: 'Service',
        name: 'service',
        type: 'string',
        // options: {
        //   list: [
        //     {title: "Design", value: "client"},
        //     {title: "Educational", value: "educational"},
        //     {title: "Personal", value: "personal"}
        //   ],
        // }
      },
      {
        name: 'tags',
        type: 'array',
        of: [
            {type: "string"}
        ],
        options: {
            layout: "tags"
        }
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }
  