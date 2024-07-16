export default {
        delete:{
            "tags": [
              "wishlist_items"
            ],
            "parameters": [
              
             
                {
                    "name": "wishlist_item_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "wishlist_id",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "product_id",
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
        