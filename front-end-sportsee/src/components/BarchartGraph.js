/** 
   * Component that displays daily activity in the form of a Barchart based on weight and calories burned
   * @param {object} userInfosActivityData
   * @return {}

 */


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import moment from 'moment';
import PropTypes from 'prop-types';



export function BarchartGraph({userInfosActivityData}) {

    
    const formatXAxis = (tickFormat) => {

        return moment(tickFormat).format("D");

      };

    const CustomTooltip = ({ active, payload }) => {

          
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
             
                {payload.map((pld, index) => {

                  if(pld.dataKey =="kilogram") {

                    return(<div className="tooltip-item" key={index}>{pld.value} kg</div>);


                  } else {

                    return(<div className="tooltip-item" key={index}>{pld.value} Kcal</div>);

                  }

                }

                )}
            
            </div>
          );
        }
      
        return null;
      };




        return(



            <div className="cartStatBar">

                    <h2 className='cartStatBarTitle'>Activite quotidienne</h2>


                    <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                width={500}
                                height={300}
                                data={userInfosActivityData?.sessions}
                                margin={{
                                  top: 50,
                                  right: 25,
                                  left: 25,
                                  bottom: 30,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" vertical={false}  />
                                <XAxis dataKey="day" tickSize={0} tickMargin={25} tickFormatter={(tick) => formatXAxis(tick)} type={'category'} stroke="#9B9EAC" tickLine={false} />
                                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" hide="true" />
                                <YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" dataKey="kilogram" axisLine={false} type="number" domain={['dataMin -1', 'dataMax']}   tickCount="3"  tickMargin={25} tickSize={0} />
                                <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }}  />
                                <Legend  verticalAlign="top" align="right" iconType={"circle"} iconSize="6" formatter={(value)=>(<span className='legendSeize'>{value}</span> )}  height={50}  />
                                <Bar name="Poids (kg)" yAxisId="right" dataKey="kilogram"  fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
                                <Bar name="Calories brûlées (kCal)" yAxisId="left" dataKey="calories"  fill="#FF0101" barSize={7} radius={[10, 10, 0, 0]}  />
                              </BarChart>
                    </ResponsiveContainer>

            
            
            
            </div>

        );


};

BarchartGraph.propTypes = {  
  userInfosActivityData: PropTypes.object.isRequired,
};
