export default {
        delete:{
            "tags": [
              "orders"
            ],
            "parameters": [
              
             
                {
                    "name": "order_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "customer_id",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "order_date",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "status",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "total",
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
        },
    }
        