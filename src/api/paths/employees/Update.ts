export default {
        put:{
            "tags": [
              "employees"
            ],
            "parameters": [

             
                {
                    "name": "employee_id",
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
                    "name": "hire_date",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "department_id",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "role_id",
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
