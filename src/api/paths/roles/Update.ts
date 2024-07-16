export default {
        put:{
            "tags": [
              "roles"
            ],
            "parameters": [

             
                {
                    "name": "role_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "role_name",
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
