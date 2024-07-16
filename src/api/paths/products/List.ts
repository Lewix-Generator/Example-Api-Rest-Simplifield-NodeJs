export default {
    get: {
        "tags": [
            "products"
        ],
        "parameters": [

         
            {
                "name": "product_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "product_name",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "description",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "price",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "stock",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "category_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "supplier_id",
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
