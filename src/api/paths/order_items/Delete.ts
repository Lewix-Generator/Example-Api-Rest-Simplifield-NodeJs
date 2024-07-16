export default {
        delete:{
            "tags": [
              "order_items"
            ],
            "parameters": [
              
             
                {
                    "name": "order_item_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "order_id",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "product_id",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "quantity",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "price",
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
        