export default {
    get: {
        "tags": [
            "payments"
        ],
        "parameters": [

         
            {
                "name": "payment_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "order_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "payment_date",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "amount",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "payment_method",
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
