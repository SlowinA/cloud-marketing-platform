export default defineEventHandler(() => {
    return {
    "event_id": "a1b2c3d4-0001-4000-8000-abcdef123456",
    "event_type": "add_payment_info",
    "timestamp": "2025-10-09T22:15:30.123Z",
    "payload": {
        "user_id": "usr_a8e4b1",
        "session_id": "sess_xyz789",
        "order_id": "ORD-20251009-A4B7",
        "currency": "PLN",
        "value": 4618.99,
        "payment_method": "blik",
        "checkout_step": 3
    }
}
})
