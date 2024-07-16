export default {
    get: {
        "tags": [
            "employees"
        ],
        "parameters": [

         
            {
                "name": "employee_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "first_name",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "last_name",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "email",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "phone",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "hire_date",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "department_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "role_id",
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
