
export const getTotal = (data) => {

  if( !data )return;

  const result = data.map( value =>{
    return [value.cantidad * value.precio]
  }).reduce(( acc, value )=>{
    return acc + Number( value );
  },0);

  return result;

};
