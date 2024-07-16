export default {
        put:{
            "tags": [
              "permissions"
            ],
            "parameters": [

             
                {
                    "name": "permission_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "permission_name",
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
