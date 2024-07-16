/**
  * List entity
  * 
  * @param entity Entity that is working
  * @param params "WHERE" Paramters for action 
  * @returns promisse
  * @example { id: req.params.id, email: req.params.email ... }
  */
 export const list = async (entity:any, params:any) => {
     return entity.findAll({
         order: [
          //   ['id', 'ASC'],
         ],
         where: params
     });
 }
 
 /**
  * List one entity
  * 
  * @param entity Entity that is working
  * @param params "WHERE" Paramters for action  
  * @returns promisse
  * @example { id: req.params.id }
  */
 export const listOne = async (entity:any, params:any) => {
     return entity.findOne({
         where: params 
     });
 }
 
 
 /**
  * Save entity
  * 
  * @param entity Entity that is working
  * @param params Paramters for action 
  * @returns promisse
  */
 export const save = async (entity:any, params:any) => {
     return entity.create(params);
 }
 
 

 
 /**
  * Update entity
  * 
  * @param entity Entity that is working
  * @param params Paramters for action 
  * @returns promisse
  */
 export const update = async (entity:any, params:any, where:any) => {
    return entity.update( params ,{
        where: where
    });
}