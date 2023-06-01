import { defineField, defineType,defineArrayMember } from "sanity";

export default defineType({
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
          }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),
        defineField({
            title: "Date of Delivery",
            name: 'date',
            type: "datetime"
          }),
        defineField({
            name: "client",
            type: "string"
          }),
        defineField({
            name: "firm",
            type: "string"
          }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 150,
            },
          }),
        defineField({
            name: "description",
            type: "text"
          }),
        defineField({
            name: 'portfolioImage',
            title: 'Portfolio image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
        defineField({
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
          }),
        defineField({
            name: 'link',
            type: 'url'
          }),
        defineField({
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
          }),
        defineField({
            name: 'tags',
            type: 'array',
            of: [
                {type: "string"}
            ],
            options: {
                layout: "tags"
            }
          })
    ]
})