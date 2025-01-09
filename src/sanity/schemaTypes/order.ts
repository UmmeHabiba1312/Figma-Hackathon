export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string',
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'object',
        fields: [
          {
            name: 'street',
            title: 'Street',
            type: 'string',
          },
          {
            name: 'city',
            title: 'City',
            type: 'string',
          },
          {
            name: 'state',
            title: 'State',
            type: 'string',
          },
          {
            name: 'zip',
            title: 'ZIP Code',
            type: 'string',
          },
        ],
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Product Name',
                type: 'string',
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
              },
              {
                name: 'price',
                title: 'Price',
                type: 'number',
              },
            ],
          },
        ],
      },
      {
        name: 'trackingId',
        title: 'Tracking ID',
        type: 'string',
      },
    ],
  };











// export default {
//     name: 'order', // Document type name
//     title: 'Order', // Display name in Sanity Studio
//     type: 'document', // Document type
//     fields: [
//       {
//         name: 'customerName',
//         title: 'Customer Name',
//         type: 'string',
//       },
//       {
//         name: 'totalAmount',
//         title: 'Total Amount',
//         type: 'number',
//       },
//       {
//         name: 'shippingAddress',
//         title: 'Shipping Address',
//         type: 'object',
//         fields: [
//           {
//             name: 'street',
//             title: 'Street',
//             type: 'string',
//           },
//           {
//             name: 'city',
//             title: 'City',
//             type: 'string',
//           },
//           {
//             name: 'state',
//             title: 'State',
//             type: 'string',
//           },
//           {
//             name: 'zip',
//             title: 'ZIP Code',
//             type: 'string',
//           },
//         ],
//       },
//       {
//         name: 'products',
//         title: 'Products',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               {
//                 name: 'name',
//                 title: 'Product Name',
//                 type: 'string',
//               },
//               {
//                 name: 'quantity',
//                 title: 'Quantity',
//                 type: 'number',
//               },
//               {
//                 name: 'price',
//                 title: 'Price',
//                 type: 'number',
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   };