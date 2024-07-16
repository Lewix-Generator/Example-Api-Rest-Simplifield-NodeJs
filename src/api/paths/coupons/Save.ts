export default {
    post: {
        "tags": ["coupons"],
        "parameters": [


             
        
        
        
                {
                    "name": "coupon_code",
                    "in": "formData",
                    "required": true
                },
        
        
                {
                    "name": "discount",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "expiration_date",
                    "in": "formData",
                    "required": false
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
