/** 
   * Component that displays the type of activity performed as a radar chart
   * @param {object} userInfoPerformances
   * @return {}

 */

import { Radar,RadarChart,PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';






export function RadarChartGraph({userInfoPerformances}) {

   
    const userInfoPerformance = userInfoPerformances.find((user)=> {

        if(user.kind ) {

          return user;

          }        

    });



const dataReverse=   userInfoPerformance?.data.reverse();  

    const formatCategorie = (tickFormat)=> {


        switch(tickFormat) {

          case 1:
            return "Cardio";

          case 2:
            return "Energie";
          case 3:
            return "Endurance";
          case 4:
            return "Force";
          case 5:
            return "Vitesse";
          case 6:
            return "Intensité";
            break;



        }



      }


    return(


      <div className="statPerformanceRadar">

        <ResponsiveContainer width="100%" height="100%" >
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataReverse}   margin={{
                top: 50,
                right: 0,
                left: 0,
                bottom: 0,
              }}>
                <PolarGrid radialLines={false} stroke="#FFFFFF" />               
                <PolarAngleAxis  tickSize={0}  dataKey="kind" tickFormatter={(tick) => formatCategorie(tick)} tickLine={false} stroke="#FFFFFF"  />
                <PolarRadiusAxis domain={[0, 240]} tick={false} axisLine={false} />
                <Radar dataKey="value" stroke="#8884d8" fill="#FF0000" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>

      </div>



    );


};

RadarChartGraph.propTypes = {  
  userInfoSessionsData: PropTypes.object,
};