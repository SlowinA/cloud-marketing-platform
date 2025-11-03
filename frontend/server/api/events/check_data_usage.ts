export default defineEventHandler(() => {
    return {
    "event_id": "a1b2c3d4-0011-4000-8000-abcdef123456",
    "event_type": "check_data_usage",
    "timestamp": "2025-10-09T22:25:05.321Z",
    "payload": {
        "user_id": "usr_a8e4b1",
        "session_id": "sess_xyz789",
        "service_id": "48501100200",
        "service_type": "abonament",
        "data_used_gb": 85.5,
        "data_limit_gb": 120,
        "data_remaining_pct": 28.75
    }
}
})
