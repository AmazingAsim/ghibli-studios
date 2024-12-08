
export function useSum(...num){
  let result = num.reduce(function(total,current){return total+current})
  return result
}

export function useSub(...num){
  let result = num.reduce(function(total,current){return total-current})
  return Math.abs(result);
}



