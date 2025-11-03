export default defineEventHandler(() => {
    return {
    "event_id": "a1b2c3d4-0026-4000-8000-abcdef123456",
    "event_type": "submit_survey",
    "timestamp": "2025-10-18T18:00:10.321Z",
    "payload": {
        "user_id": "usr_a8e4b1",
        "survey_id": "post_purchase_nps_2025",
        "survey_name": "Badanie satysfakcji po zakupie",
        "responses": [
            {
                "question": "Jak oceniasz proces zakupowy?",
                "answer": "5"
            },
            {
                "question": "Co moglibyśmy poprawić?",
                "answer": "Wszystko było super!"
            }
        ]
    }
}
})
