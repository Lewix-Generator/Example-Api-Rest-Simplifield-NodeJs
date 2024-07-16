export default {
    get: {
        "tags": [
            "coupons"
        ],
        "parameters": [

         
            {
                "name": "coupon_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "coupon_code",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "discount",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "expiration_date",
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
