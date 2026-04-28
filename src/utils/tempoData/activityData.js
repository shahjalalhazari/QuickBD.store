export const activities = [
  {
    id:"act_1001",
    type:"order_created",
    entityId:"ORD-7842",

    message:"New order received",
    amount:450.99,

    createdAt:"2026-04-28T20:01:00Z"
  },

  {
    id:"act_1002",
    type:"order_delivered",
    entityId:"ORD-7839",

    message:"Marked as delivered",

    createdAt:"2026-04-28T19:20:00Z"
  },

  {
    id:"act_1003",
    type:"low_stock",
    productId:"PRD-103",

    message:"Low stock alert",
    productName:"Wireless Earbuds",
    stockLeft:5,

    createdAt:"2026-04-28T09:30:00Z"
  },

  {
    id:"act_1004",
    type:"order_cancelled",
    entityId:"ORD-7839",

    message:"Cancelled by customer",

    createdAt:"2026-04-28T18:15:00Z"
  },

  {
    id:"act_1005",
    type:"payment_received",

    paymentId:"PAY-204",

    message:"Payment received",
    amount:872.50,

    createdAt:"2026-04-28T13:50:00Z"
  },

  {
    id:"act_1006",
    type:"review_received",

    reviewId:"REV-501",

    message:"New 5-star review",
    productName:"Smart Watch",

    rating:5,

    createdAt:"2026-04-27T10:10:00Z"
  }
];