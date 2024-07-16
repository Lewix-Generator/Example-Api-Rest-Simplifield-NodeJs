export default {
        put:{
            "tags": [
              "payments"
            ],
            "parameters": [

             
                {
                    "name": "payment_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "order_id",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "payment_date",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "amount",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "payment_method",
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
