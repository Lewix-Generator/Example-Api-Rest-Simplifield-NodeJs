export default {
    get: {
        "tags": [
            "suppliers"
        ],
        "parameters": [

         
            {
                "name": "supplier_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "supplier_name",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "contact_name",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "contact_email",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "contact_phone",
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
