export default {
    post: {
        "tags": ["reviews"],
        "parameters": [


             
        
        
        
                {
                    "name": "product_id",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "customer_id",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "review_date",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "rating",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "comment",
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
