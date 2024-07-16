export default {
    get: {
        "tags": [
            "orders"
        ],
        "parameters": [

         
            {
                "name": "order_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "customer_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "order_date",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "status",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "total",
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
