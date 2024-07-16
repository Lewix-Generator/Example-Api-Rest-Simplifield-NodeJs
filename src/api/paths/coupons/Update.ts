export default {
        put:{
            "tags": [
              "coupons"
            ],
            "parameters": [

             
                {
                    "name": "coupon_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "coupon_code",
                    "in": "formData",
                    "required": false
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
