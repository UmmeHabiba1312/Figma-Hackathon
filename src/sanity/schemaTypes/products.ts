

export default {
    name:"product",
    type:"document",
    title:"Product",
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name of Product',
        },
        {
            name:'image',
            type:'array',
            title:'Product Images',
            of:[{type:'image'}]
        },
        {
            name:'description',
            type:'text',
            title:'Description of Product',
        },
        {
            name:'slug',
            type:'slug',
            title:'Product Slug',
           options:{
            source:'name',
           }
        },
        {
            name:'price',
            type:'number',
            title:'Price of Product',
        },
        {
            name:'price_id',
            title:'Stripe Price ID',
            type:'string',
        }

    ]
}