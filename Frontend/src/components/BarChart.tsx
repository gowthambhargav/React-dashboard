import { ResponsiveBar } from "@nivo/bar";

function BarChart({data,keys}) {
  return (
    <div className="w-full m-2">
    <div style={{ height: 400 }}>
       <ResponsiveBar
         data={data}
         keys={keys}
         indexBy="country"
         margin={{ top: 10, right: 0, bottom: 50, left: 60 }}
         padding={0.3}
         layout="vertical"
         colors={{ scheme: 'nivo' }}
         borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
         axisTop={null}
         axisRight={null}
         axisBottom={{
           tickSize: 5,
           tickPadding: 5,
           tickRotation: -45,
           legend: 'country',
           legendPosition: 'middle',
           legendOffset: 32,

         }}
         axisLeft={{
           tickSize: 5,
           tickPadding: 5,
           tickRotation: 0,
           legend: 'food',
           legendPosition: 'middle',
           legendOffset: -40
         }}
         // labelSkipWidth={12}
         // labelSkipHeight={12}
         // labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
         animate={true}
       />
     </div>
    </div>
  )
}

export default BarChart