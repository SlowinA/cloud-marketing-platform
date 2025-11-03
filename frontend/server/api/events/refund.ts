export default defineEventHandler(() => {
    return {
    "event_id": "a1b2c3d4-0021-4000-8000-abcdef123456",
    "event_type": "refund",
    "timestamp": "2025-10-15T10:05:12.321Z",
    "payload": {
        "user_id": "usr_a8e4b1",
        "transaction_id": "ORD-20251009-A4B7",
        "refund_id": "REF-A4B7-01",
        "value": 4618.99,
        "currency": "PLN",
        "reason": "zwrot_konsumencki",
        "items": [
            {
                "item_id": "prod_fbc123",
                "quantity": 1
            }
        ]
    }
}
})
