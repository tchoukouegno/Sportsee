/** 
   *Function that retrieves the id of a user and returns its information according to the Api or the Mocked data
   * @param {string} Id
   * @return {Promise} 

 */ 





import { fetchData } from "./fetchData"
import {USER_PERFORMANCE} from "../datas/MockData";
import {USER_MAIN_DATA} from "../datas/MockData"
import {USER_ACTIVITY} from "../datas/MockData"
import {USER_AVERAGE_SESSIONS} from "../datas/MockData";





export function  routeCallApiOrMocksDAta(Id) {

    



    const url1 = `http://localhost:3000/user/${Id}`;
    const url2 = `http://localhost:3000/user/${Id}/activity`;
    const url3 = `http://localhost:3000/user/${Id}/average-sessions`;
    const url4 = `http://localhost:3000/user/${Id}/performance`;


   
    return new Promise((resolve)=>{
      

                        function getUser() {

                            return new Promise((resolve)=>{

                                fetchData(url1).then((response)=>{                     
                        
                                    if(response.data == undefined) {
                                        

                                        const userInfo =USER_MAIN_DATA.find((user)=>{

                                            if( user.id == Id){
                                  
                                                return user;
                                  
                                            }                                 
                                  
                                        });

                        
                                    return  resolve(userInfo);
                        
                                    }else {
                                            
                                            return resolve(response.data);                 
                        
                                    }                       
                            
                                    });

                            });


                        };

                        function getUserActivity() {


                        return new Promise((resolve)=>{


                            fetchData(url2).then((response)=>{               
                    
                    
                                if(response.data == undefined) {
                    
                                    const userInfoActivity = USER_ACTIVITY.find((user)=> {

                                                if(user.userId == Id ) {
                                        
                                                  return user;
                                        
                                                  }
                                        
                                    });

                                    const responseAssign = Object.assign({}, userInfoActivity, {
        
                                        arrayNameGet:"ACTIVITY"
                                       
                                });
                                      

                    
                                return  resolve(responseAssign);
                    
                                }else {

                                    const responseAssign = Object.assign({}, response.data, {
        
                                        arrayNameGet:"ACTIVITY"
                                       
                                });
                    
                                    
                                    return  resolve(responseAssign);
                    
                                }
                    
                
                                });


                        });

                        };

                        function getUserAverageSession() {


                            return new Promise((resolve)=>{
    
    
                                fetchData(url3).then((response)=>{               
                        
                        
                                    if(response.data == undefined) {


                                        const userInfoPerSession = USER_AVERAGE_SESSIONS.find((user)=> {

                                                    if(user.userId == Id ) {
                                            
                                                      return user;
                                            
                                                      }   
                                            
                                            })

                                            const responseAssign = Object.assign({}, userInfoPerSession, {
        
                                                arrayNameGet:"AVERAGE"
                                               
                                        });
                                            
                        
                                    return  resolve(responseAssign);
                        
                                    }else {

                                        const responseAssign = Object.assign({}, response.data, {
        
                                            arrayNameGet:"AVERAGE"
                                           
                                    });
                                   
                                        return  resolve(responseAssign) ;
                        
                                    }                       
                    
                                    })
    
    
    
                            })  
    
                            };

                        
                        function getUserPerformance() {


                            return new Promise((resolve)=>{
    
    
                                fetchData(url4).then((response)=>{               
                        
                        
                                    if(response.data == undefined) {

                                        const userInfoPerformance = USER_PERFORMANCE.find((user)=> {


                                            if(user.kind ) {
                                    
                                              return user;
                                    
                                              }                                  
                                            
                                    
                                    })
                        
                                    return  resolve(userInfoPerformance);
                        
                                    }else {                                       
                                        
                                        return  resolve(response.data); 
                        
                                    }
                        
                    
                                    }); 
    
                            });
    
                            };
   
       
        Promise.all([getUser(), getUserActivity(), getUserAverageSession(), getUserPerformance()]).then((result)=>{
               
              

                  resolve(result);
                


        });


    });

    




}



 
