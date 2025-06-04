export const incompleteObjectProperties =( body: object ): boolean =>{  
    return Object.values(body).some( value => value === '' );
 };