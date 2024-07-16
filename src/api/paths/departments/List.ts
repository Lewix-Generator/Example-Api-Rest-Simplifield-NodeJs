export default {
    get: {
        "tags": [
            "departments"
        ],
        "parameters": [

         
            {
                "name": "department_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "department_name",
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
