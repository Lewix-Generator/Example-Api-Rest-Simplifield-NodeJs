export default {
        delete:{
            "tags": [
              "suppliers"
            ],
            "parameters": [
              
             
                {
                    "name": "supplier_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "supplier_name",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "contact_name",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "contact_email",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "contact_phone",
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
        