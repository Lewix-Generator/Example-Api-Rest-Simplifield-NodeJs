export default {
    get: {
        "tags": [
            "addresses"
        ],
        "parameters": [

         
            {
                "name": "address_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "customer_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "street",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "city",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "state",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "postal_code",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "country",
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
