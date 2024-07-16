export default {
        put:{
            "tags": [
              "categories"
            ],
            "parameters": [

             
                {
                    "name": "category_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "category_name",
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
