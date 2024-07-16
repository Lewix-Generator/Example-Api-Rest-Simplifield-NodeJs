export default {
    get: {
        "tags": [
            "categories"
        ],
        "parameters": [

         
            {
                "name": "category_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "category_name",
                "in": "query",
                "type": "string",
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
    }
}
