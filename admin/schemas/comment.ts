import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
          }),
        defineField({
            name: "approved",
            title: "Approved",
            type: "boolean",
            description: "comment wouldn't show on the post without approval"
          }),
        defineField({
            name: "email",
            type: "string",
          }),
        defineField(    {
            name: "comment",
            type: "string"
          }),
        defineField({
            name: "post",
            type: "reference",
            to: [{
                type: 'post'
            }],
          })
    ]
})