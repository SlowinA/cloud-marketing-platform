export default defineEventHandler(() => {
    return {
    "event_id": "a1b2c3d4-0022-4000-8000-abcdef123456",
    "event_type": "remove_from_cart",
    "timestamp": "2025-10-09T22:12:35.654Z",
    "payload": {
        "user_id": "usr_a8e4b1",
        "session_id": "sess_xyz789",
        "currency": "PLN",
        "value": 129.99,
        "items": [
            {
                "item_id": "prod_case456",
                "item_name": "Etui na Laptopa",
                "price": 129.99,
                "quantity": 1
            }
        ]
    }
}
})
