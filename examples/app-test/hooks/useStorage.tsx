

const useStorage =()=>{

  const setValue =(key:string,value:any)=>{
    try{
       if(typeof window !== 'undefined'){
         localStorage.setItem(key,value);
       }
    }catch(error){

    }
   } 

   const getValue =(key:string)=>{
        if(typeof window !== 'undefined'){
          return localStorage.getItem(key);
        }
   }

   return {
      setValue,
      getValue
   }

}
export default useStorage;