export default {
    get: {
        "tags": [
            "reviews"
        ],
        "parameters": [
        
            {
                "name": "review_id",
                "in": "path",
                "required": true
            },
        ],

        "responses": {
            "*": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string",
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "object"
                        }
                    }
                }
            },
            "200": {},
            "400": {}
        },
    },
}
