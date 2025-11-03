export default defineEventHandler(() => {
    return {
    "event_id": "a1b2c3d4-0020-4000-8000-abcdef123456",
    "event_type": "purchase",
    "timestamp": "2025-10-09T22:16:00.987Z",
    "payload": {
        "user_id": "usr_a8e4b1",
        "session_id": "sess_xyz789",
        "transaction_id": "ORD-20251009-A4B7",
        "affiliation": "Sklep Internetowy Plus",
        "value": 4599.0,
        "tax": 859.98,
        "shipping": 19.99,
        "currency": "PLN",
        "coupon": null,
        "items": [
            {
                "item_id": "prod_fbc123",
                "item_name": "Laptop ProBook X5",
                "item_category": "Elektronika",
                "price": 4599.0,
                "quantity": 1
            }
        ]
    }
}
})
