/** 
   *Component that displays the average score as a RadialBart 
   * @param {array} userInfoScore
   * @return {}

 */
import { RadialBarChart, RadialBar, PolarAngleAxis,  ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';




export function RadialBarChartGraph({userInfoScore}) {

   
    userInfoScore.map((user)=>{

     
      if(user.score) {

        delete Object.assign(user, { todayScore: user.score })['score'];

      } else {

        return null;

      };




    });



  

    return (


        <div className="statPerformance">

          <h2 className='statPerformanceTitle'>Score</h2>

          <div className='scoremap'> {userInfoScore.map((Score,id)=>{

            if(Score.score) {         

              return(
              
              <div className='pourcent' key={id}>

                  <span className='pourcentScore'>{(Score.score * 100).toFixed(0)}%</span>
                  <span className='pourcentScoreObjectif'>de votre objectif</span>


              </div>)

            } else {

              return(
              
              
                <div className='pourcent' key={id}>

                    <span className='pourcentScore'>{(Score.todayScore * 100).toFixed(0)}%</span>
                    <span className='pourcentScoreObjectif'>de votre objectif</span>


                </div>
              
              
              )

            }           

            })}
          </div>

        <ResponsiveContainer width="100%" height="100%">
             <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="80%" barSize={10} data={userInfoScore}  startAngle={195} endAngle={105}  >
               <RadialBar
                 minAngle={15}
                 background={true}
                 clockWise
                dataKey="todayScore" 
                fill="#FF0101"
                cornerRadius={30}               
               />

               <PolarAngleAxis type='number' domain={[0,1]} tick={false}/>
                <circle cx="50%" cy="50%" fill='#FFFFFF' r='93'></circle>
           
             </RadialBarChart>
             
       </ResponsiveContainer>
        



       </div>



    );



};




RadialBarChartGraph.propTypes = {  
  userInfoScore: PropTypes.array.isRequired,
};
