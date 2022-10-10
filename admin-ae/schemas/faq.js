export default {
    name: 'faq',
    title: 'Frequently Asked Questions',
    type: 'document',
    fields: [
      {
        name: 'question',
        title: 'Question',
        type: 'string',
      },
      {
        name: "answer",
        title:"Answer",
        type: "string"
      },
      {
        name: "service",
        type: "reference",
        to: [{
            type: 'service'
        }],
      },
      
    ], 
    
  }