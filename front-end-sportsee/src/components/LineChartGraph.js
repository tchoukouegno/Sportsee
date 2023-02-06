/** 
   * Component that displays the average session duration as a LineChart
   * @param {object} userInfosActivityData
   * @return {}

 */

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import PropTypes from 'prop-types';








export function LineChartGraph({userInfoSessionsData}) {


    const formatWeek = (tickFormat) => {


        switch(tickFormat) {

          case 1:
            return "L";

          case 2:
            return "M";
          case 3:
            return "M";
          case 4:
            return "J";
          case 5:
            return "V";
          case 6:
            return "S";
          case 7:
            return "D";
            break;



        }


    }

    const CustomTooltip = ({ active, payload }) => {
          
        if (active && payload && payload.length) {        

          return (
            <div className="custom-tooltipArea">
             
                {payload.map((pld, index) => {

                    return(<div key={index}>{pld.value}min</div>)

                }

                )}
            
            </div>
          );
        }
      
        return null;
      };




    return(


        <div className="statPerformanceSessions">

          <h2 className="statPerformanceSessionsTitle">Durée moyenne des sessions</h2>

        <ResponsiveContainer width="100%" height="100%">

        <LineChart
          width={500}
          height={300}
          data={ userInfoSessionsData?.sessions}
          margin={{
            top: 80,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          >
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis  dataKey="day" tickFormatter={(tick) => formatWeek(tick)} axisLine={false}  tickSize={0} stroke="#FF8181" />
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"  strokeWidth={3} dot={false} />
        </LineChart>
        </ResponsiveContainer>     

        </div>









    );


              

};

LineChartGraph.propTypes = {  
  userInfoSessionsData: PropTypes.object.isRequired,
};