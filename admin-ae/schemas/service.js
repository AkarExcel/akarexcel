import { icons } from "./icons";

export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        //validation: Rule => Rule.max(1500).warning(`A title shouldn't be more than 1500 characters.`),
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
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        title: 'icon Type',
        name: 'iconType',
        type: 'string',
        options: {
          list: icons
        }
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'about',
        title: 'About',
        type: 'blockContent',
      },
          //   {
    //     name: 'images',
    //     title: 'Images',
    //     type: 'array',
    //     of: [{type: 'reference', to: {type: 'FAQ'}}],
    //   },
    ],
  }
  