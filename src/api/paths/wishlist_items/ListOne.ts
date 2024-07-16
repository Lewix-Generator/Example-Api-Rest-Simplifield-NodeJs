export default {
    get: {
        "tags": [
            "wishlist_items"
        ],
        "parameters": [
        
            {
                "name": "wishlist_item_id",
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
