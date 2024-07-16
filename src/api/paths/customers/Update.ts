export default {
        put:{
            "tags": [
              "customers"
            ],
            "parameters": [

             
                {
                    "name": "customer_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "first_name",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "last_name",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "email",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "phone",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "created_at",
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
