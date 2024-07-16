export default {
        delete:{
            "tags": [
              "departments"
            ],
            "parameters": [
              
             
                {
                    "name": "department_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "department_name",
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
        