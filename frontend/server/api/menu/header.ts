export default defineEventHandler(() => {
    return {
        "name": "header",
        "type": "object",
        "items": [
            {
                "id": 1,
                "name": "Help",
                "link": "/help"
            },
            {
                "id": 2,
                "name": "Settings",
                "link": "/settings"
            },
            {
                "id": 3,
                "name": "Profile",
                "link": "/profile"
            }
        ]
    }
})
