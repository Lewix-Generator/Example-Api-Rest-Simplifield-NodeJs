export default {
        put:{
            "tags": [
              "products"
            ],
            "parameters": [

             
                {
                    "name": "product_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "product_name",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "description",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "price",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "stock",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "category_id",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "supplier_id",
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
