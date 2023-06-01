import {defineField, defineType} from 'sanity'
import { icons } from "./icons";

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            //validation: Rule => Rule.max(1500).warning(`A title shouldn't be more than 1500 characters.`),
          },),
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
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
        defineField({
            title: 'icon Type',
            name: 'iconType',
            type: 'string',
            options: {
              list: icons
            }
          }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
          }),
        defineField({
            name: 'about',
            title: 'About',
            type: 'blockContent',
          }),
    ]
})