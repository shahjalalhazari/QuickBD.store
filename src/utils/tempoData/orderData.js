export const orderData = [
    {
        id:"ORD-1001",
        customer:{
            name:"John Doe",
            email:"john@example.com",
            avatar:"/avatars/user-1.jpg"
        },

        product:[
            {
                name:"Wireless Earbuds Pro",
                sku:"SKU-201",
                quantity:2
            },
            {
                name:"Blutooth Headphone",
                sku:"SKU-202",
                quantity:3
            },
            {
                name:"Wireless Earbuds Pro",
                sku:"SKU-201",
                quantity:2
            },
        ],

        paymentMethod:"Card",
        total:145.00,
        shippingFee:10,
        discount:5,

        status:"Delivered",
        paymentStatus:"Paid",
        fulfillmentStatus:"Shipped",

        orderDate:"2026-04-12T09:42:17.284Z",
        deliveryDate:"2026-04-15T14:18:33.921Z",

        priority:"Normal",
        source:"Website"
    },

    {
        id:"ORD-1002",
        customer:{
            name:"Sarah Lee",
            email:"sarah@example.com",
            avatar:"/avatars/user-2.jpg"
        },

        product:[{
            name:"Gaming Keyboard",
            sku:"SKU-315",
            quantity:1
        }],

        paymentMethod:"COD",
        total:89.00,
        shippingFee:5,
        discount:0,

        status:"Pending",
        nextStep: "Accept",
        paymentStatus:"Pending",
        fulfillmentStatus:"Processing",

        orderDate:"2026-04-13T16:11:52.133Z",
        deliveryDate:null,

        priority:"High",
        source:"Mobile App"
    },

    {
        id:"ORD-1003",
        customer:{
            name:"Ahmed Khan",
            email:"ahmed@example.com",
            avatar:"/avatars/user-3.jpg"
        },

        product:[{
            name:"Smart Watch X",
            sku:"SKU-520",
            quantity:1
        }],

        paymentMethod:"Card",
        total:249.00,
        shippingFee:0,
        discount:20,

        status:"Shipped",
        paymentStatus:"Paid",
        fulfillmentStatus:"In Transit",

        orderDate:"2026-04-14",
        deliveryDate:"2026-04-18",

        priority:"Normal",
        source:"Website"
    },

    {
        id:"ORD-1004",
        customer:{
            name:"Fatima Noor",
            email:"fatima@example.com",
            avatar:"/avatars/user-4.jpg"
        },

        product:[{
            name:"Laptop Stand",
            sku:"SKU-118",
            quantity:3
        }],

        paymentMethod:"Card",
        total:120.00,
        shippingFee:8,
        discount:10,

        status:"Processing",
        nextStep: "Shipped",
        paymentStatus:"Paid",
        fulfillmentStatus:"Packing",

        orderDate:"2026-04-15",
        deliveryDate:null,

        priority:"Medium",
        source:"Marketplace"
    },

    {
        id:"ORD-1005",
        customer:{
            name:"Michael Roy",
            email:"michael@example.com",
            avatar:"/avatars/user-5.jpg"
        },

        product:[{
            name:"Bluetooth Speaker",
            sku:"SKU-781",
            quantity:1
        }],

        paymentMethod:"PayPal",
        total:165.00,
        shippingFee:0,
        discount:15,

        status:"Cancelled",
        paymentStatus:"Refunded",
        fulfillmentStatus:"Cancelled",

        orderDate:"2026-04-16",
        deliveryDate:null,

        priority:"High",
        source:"Website"
    },

    {
        id:"ORD-1006",
        customer:{
            name:"Emma Watson",
            email:"emma@example.com",
            avatar:"/avatars/user-6.jpg"
        },

        product:[{
            name:"Phone Case",
            sku:"SKU-912",
            quantity:4
        }],

        paymentMethod:"Card",
        total:72.00,
        shippingFee:6,
        discount:0,

        status:"Delivered",
        paymentStatus:"Paid",
        fulfillmentStatus:"Delivered",

        orderDate:"2026-04-16",
        deliveryDate:"2026-04-19",

        priority:"Low",
        source:"Mobile App"
    },

    {
        id:"ORD-1007",
        customer:{
            name:"John Doe",
            email:"john@example.com",
            avatar:"/avatars/user-1.jpg"
        },

        product:[{
            name:"Wireless Earbuds Pro",
            sku:"SKU-201",
            quantity:2
        }],

        paymentMethod:"Card",
        total:145.00,
        shippingFee:10,
        discount:5,

        status:"Accepted",
        nextStep: "Start Process",
        paymentStatus:"Paid",
        fulfillmentStatus:"Shipped",

        orderDate:"2026-04-12",
        deliveryDate:"2026-04-15",

        priority:"Normal",
        source:"Website"
    },

    {
        id:"ORD-1008",
        customer:{
            name:"Sarah Lee",
            email:"sarah@example.com",
            avatar:"/avatars/user-2.jpg"
        },

        product:[{
            name:"Gaming Keyboard",
            sku:"SKU-315",
            quantity:1
        }],

        paymentMethod:"COD",
        total:89.00,
        shippingFee:5,
        discount:0,

        status:"Pending",
        paymentStatus:"Pending",
        fulfillmentStatus:"Processing",

        orderDate:"2026-04-13",
        deliveryDate:null,

        priority:"High",
        source:"Mobile App"
    },

    {
        id:"ORD-1009",
        customer:{
            name:"Ahmed Khan",
            email:"ahmed@example.com",
            avatar:"/avatars/user-3.jpg"
        },

        product:[{
            name:"Smart Watch X",
            sku:"SKU-520",
            quantity:1
        }],

        paymentMethod:"Card",
        total:249.00,
        shippingFee:0,
        discount:20,

        status:"Shipped",
        paymentStatus:"Paid",
        fulfillmentStatus:"In Transit",

        orderDate:"2026-04-14",
        deliveryDate:"2026-04-18",

        priority:"Normal",
        source:"Website"
    },

    {
        id:"ORD-1010",
        customer:{
            name:"Fatima Noor",
            email:"fatima@example.com",
            avatar:"/avatars/user-4.jpg"
        },

        product:[{
            name:"Laptop Stand",
            sku:"SKU-118",
            quantity:3
        }],

        paymentMethod:"Card",
        total:120.00,
        shippingFee:8,
        discount:10,

        status:"Processing",
        nextStep: "Shipped",
        paymentStatus:"Paid",
        fulfillmentStatus:"Packing",

        orderDate:"2026-04-15",
        deliveryDate:null,

        priority:"Medium",
        source:"Marketplace"
    },

    {
        id:"ORD-1011",
        customer:{
            name:"Michael Roy",
            email:"michael@example.com",
            avatar:"/avatars/user-5.jpg"
        },

        product:[{
            name:"Bluetooth Speaker",
            sku:"SKU-781",
            quantity:1
        }],

        paymentMethod:"PayPal",
        total:165.00,
        shippingFee:0,
        discount:15,

        status:"Cancelled",
        paymentStatus:"Refunded",
        fulfillmentStatus:"Cancelled",

        orderDate:"2026-04-16",
        deliveryDate:null,

        priority:"High",
        source:"Website"
    },

    {
        id:"ORD-1012",
        customer:{
            name:"Emma Watson",
            email:"emma@example.com",
            avatar:"/avatars/user-6.jpg"
        },

        product:[{
            name:"Phone Case",
            sku:"SKU-912",
            quantity:4
        }],

        paymentMethod:"Card",
        total:72.00,
        shippingFee:6,
        discount:0,

        status:"Delivered",
        paymentStatus:"Paid",
        fulfillmentStatus:"Delivered",

        orderDate:"2026-04-16",
        deliveryDate:"2026-04-19",

        priority:"Low",
        source:"Mobile App"
    },

    {
        id:"ORD-1013",
        customer:{
            name:"John Doe",
            email:"john@example.com",
            avatar:"/avatars/user-1.jpg"
        },

        product:[{
            name:"Wireless Earbuds Pro",
            sku:"SKU-201",
            quantity:2
        }],

        paymentMethod:"Card",
        total:145.00,
        shippingFee:10,
        discount:5,

        status:"Delivered",
        paymentStatus:"Paid",
        fulfillmentStatus:"Shipped",

        orderDate:"2026-04-12",
        deliveryDate:"2026-04-15",

        priority:"Normal",
        source:"Website"
    },

    {
        id:"ORD-1014",
        customer:{
            name:"Sarah Lee",
            email:"sarah@example.com",
            avatar:"/avatars/user-2.jpg"
        },

        product:[{
            name:"Gaming Keyboard",
            sku:"SKU-315",
            quantity:1
        }],

        paymentMethod:"COD",
        total:89.00,
        shippingFee:5,
        discount:0,

        status:"Pending",
        nextStep: "Accept",
        paymentStatus:"Pending",
        fulfillmentStatus:"Processing",

        orderDate:"2026-04-13",
        deliveryDate:null,

        priority:"High",
        source:"Mobile App"
    },

    {
        id:"ORD-1015",
        customer:{
            name:"Ahmed Khan",
            email:"ahmed@example.com",
            avatar:"/avatars/user-3.jpg"
        },

        product:[{
            name:"Smart Watch X",
            sku:"SKU-520",
            quantity:1
        }],

        paymentMethod:"Card",
        total:249.00,
        shippingFee:0,
        discount:20,

        status:"Shipped",
        paymentStatus:"Paid",
        fulfillmentStatus:"In Transit",

        orderDate:"2026-04-14",
        deliveryDate:"2026-04-18",

        priority:"Normal",
        source:"Website"
    },

    {
        id:"ORD-1016",
        customer:{
            name:"Fatima Noor",
            email:"fatima@example.com",
            avatar:"/avatars/user-4.jpg"
        },

        product:[{
            name:"Laptop Stand",
            sku:"SKU-118",
            quantity:3
        }],

        paymentMethod:"Card",
        total:120.00,
        shippingFee:8,
        discount:10,

        status:"Processing",
        paymentStatus:"Paid",
        fulfillmentStatus:"Packing",

        orderDate:"2026-04-15",
        deliveryDate:null,

        priority:"Medium",
        source:"Marketplace"
    },

    {
        id:"ORD-1017",
        customer:{
            name:"Michael Roy",
            email:"michael@example.com",
            avatar:"/avatars/user-5.jpg"
        },

        product:[{
            name:"Bluetooth Speaker",
            sku:"SKU-781",
            quantity:1
        }],

        paymentMethod:"PayPal",
        total:165.00,
        shippingFee:0,
        discount:15,

        status:"Cancelled",
        paymentStatus:"Refunded",
        fulfillmentStatus:"Cancelled",

        orderDate:"2026-04-16",
        deliveryDate:null,

        priority:"High",
        source:"Website"
    },

    {
        id:"ORD-1018",
        customer:{
            name:"Emma Watson",
            email:"emma@example.com",
            avatar:"/avatars/user-6.jpg"
        },

        product:[{
            name:"Phone Case",
            sku:"SKU-912",
            quantity:4
        }],

        paymentMethod:"Card",
        total:72.00,
        shippingFee:6,
        discount:0,

        status:"Delivered",
        paymentStatus:"Paid",
        fulfillmentStatus:"Delivered",

        orderDate:"2026-04-16",
        deliveryDate:"2026-04-19",

        priority:"Low",
        source:"Mobile App"
    },

    {
        id:"ORD-1019",
        customer:{
            name:"John Doe",
            email:"john@example.com",
            avatar:"/avatars/user-1.jpg"
        },

        product:[{
            name:"Wireless Earbuds Pro",
            sku:"SKU-201",
            quantity:2
        }],

        paymentMethod:"Card",
        total:145.00,
        shippingFee:10,
        discount:5,

        status:"Delivered",
        paymentStatus:"Paid",
        fulfillmentStatus:"Shipped",

        orderDate:"2026-04-12",
        deliveryDate:"2026-04-15",

        priority:"Normal",
        source:"Website"
    },

    {
        id:"ORD-1020",
        customer:{
            name:"Sarah Lee",
            email:"sarah@example.com",
            avatar:"/avatars/user-2.jpg"
        },

        product:[{
            name:"Gaming Keyboard",
            sku:"SKU-315",
            quantity:1
        }],

        paymentMethod:"COD",
        total:89.00,
        shippingFee:5,
        discount:0,

        status:"Pending",
        nextStep: "Accept",
        paymentStatus:"Pending",
        fulfillmentStatus:"Processing",

        orderDate:"2026-04-13",
        deliveryDate:null,

        priority:"High",
        source:"Mobile App"
    },

    {
        id:"ORD-1021",
        customer:{
            name:"Ahmed Khan",
            email:"ahmed@example.com",
            avatar:"/avatars/user-3.jpg"
        },

        product:[{
            name:"Smart Watch X",
            sku:"SKU-520",
            quantity:1
        }],

        paymentMethod:"Card",
        total:249.00,
        shippingFee:0,
        discount:20,

        status:"Shipped",
        paymentStatus:"Paid",
        fulfillmentStatus:"In Transit",

        orderDate:"2026-04-14",
        deliveryDate:"2026-04-18",

        priority:"Normal",
        source:"Website"
    },

    {
        id:"ORD-1022",
        customer:{
            name:"Fatima Noor",
            email:"fatima@example.com",
            avatar:"/avatars/user-4.jpg"
        },

        product:[{
            name:"Laptop Stand",
            sku:"SKU-118",
            quantity:3
        }],

        paymentMethod:"Card",
        total:120.00,
        shippingFee:8,
        discount:10,

        status:"Processing",
        nextStep: "Shipped",
        paymentStatus:"Paid",
        fulfillmentStatus:"Packing",

        orderDate:"2026-04-15",
        deliveryDate:null,

        priority:"Medium",
        source:"Marketplace"
    },

    {
        id:"ORD-1023",
        customer:{
            name:"Michael Roy",
            email:"michael@example.com",
            avatar:"/avatars/user-5.jpg"
        },

        product:[{
            name:"Bluetooth Speaker",
            sku:"SKU-781",
            quantity:1
        }],

        paymentMethod:"PayPal",
        total:165.00,
        shippingFee:0,
        discount:15,

        status:"Cancelled",
        paymentStatus:"Refunded",
        fulfillmentStatus:"Cancelled",

        orderDate:"2026-04-16",
        deliveryDate:null,

        priority:"High",
        source:"Website"
    },

    {
        id:"ORD-1024",
        customer:{
            name:"Emma Watson",
            email:"emma@example.com",
            avatar:"/avatars/user-6.jpg"
        },

        product:[{
            name:"Phone Case",
            sku:"SKU-912",
            quantity:4
        }],

        paymentMethod:"Card",
        total:72.00,
        shippingFee:6,
        discount:0,

        status:"Delivered",
        paymentStatus:"Paid",
        fulfillmentStatus:"Delivered",

        orderDate:"2026-04-16",
        deliveryDate:"2026-04-19",

        priority:"Low",
        source:"Mobile App"
    }
];
