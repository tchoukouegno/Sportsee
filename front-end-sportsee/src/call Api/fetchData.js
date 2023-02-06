/** 
   * Function that retrieves data from a url passed in parameter
   * @param {string} url
   * @return {html} json

 */ 
 export function fetchData(url){


    return new Promise((resolve, reject)=>{

          fetch(url)
          
          .then((response)=>{

              
               return response.json();
              
          }).then((result)=>{


               return resolve(result);

          }).catch((error)=>{

               return resolve(error);

          })
    

    })

}







