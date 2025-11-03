export default defineEventHandler(() => {
    return {
    "event_id": "a1b2c3d4-0002-4000-8000-abcdef123456",
    "event_type": "add_shipping_info",
    "timestamp": "2025-10-09T22:14:55.456Z",
    "payload": {
        "user_id": "usr_a8e4b1",
        "session_id": "sess_xyz789",
        "order_id": "ORD-20251009-A4B7",
        "currency": "PLN",
        "value": 4618.99,
        "shipping_tier": "kurier_standard",
        "shipping_cost": 19.99,
        "checkout_step": 2
    }
}
})
