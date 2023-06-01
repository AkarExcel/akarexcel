import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField(    {
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField(    {
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "testimonial wouldn't show on the page without approval"
  }),

    defineField(    {
      name: 'position',
      title: 'Position',
      type: 'string',
  }),

    defineField(    {
      name: 'description',
      title: 'Description',
      type: 'string',
      //validation: Rule => Rule.max(1500).warning(`A title shouldn't be more than 1500 characters.`),
    }),

    defineField(    {
      name: 'authorImage',
      title: 'Author image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],


}) 
