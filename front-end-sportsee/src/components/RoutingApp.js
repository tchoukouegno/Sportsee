/** 
   * Component that manages the routes of our application react
   * 
   * 

 */ 
import {NavVertical} from './NavVertical'
import {Routes,Route} from 'react-router-dom'
import { Error } from './Error'
import { ErrorID } from './ErrorID'





export function RoutingApp () {


    return (

        <div>

                <Routes>

                        <Route index element={<NavVertical/>}/>

                        <Route path='/user/:Id' element={<NavVertical/>}/>

                        <Route path='/user/:Id/activity' element={<NavVertical/>}/>

                        <Route path='/user/:Id/performance' element={<NavVertical/>}/>

                        <Route path='/user/:Id/average-sessions' element={<NavVertical/>}/>

                        <Route path='/user/ErrorID' element={<ErrorID/>}/>

                        <Route path='*' element={<Error/>}/>


                </Routes>     



        </div>


    )







}