
import { ResponsiveBar } from "@nivo/bar"

const data = {
    "end_year": "",
    "intensity": 6,
    "sector": "Energy",
    "topic": "gas",
    "insight": "Annual Energy Outlook",
    "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
    "region": "Northern America",
    "start_year": "",
    "impact": "",
    "added": "January, 20 2017 03:51:25",
    "published": "January, 09 2017 00:00:00",
    "country": "United States of America",
    "relevance": 2,
    "pestle": "Industries",
    "source": "EIA",
    "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
    "likelihood": 3
},



export default function Component() {
    
  return (
    <div className="mt-5 ml-6">

        <BarChart className="w-full h-[500px]" />
    </div>
  )
}

function BarChart(props) {
    const colors = [
        '#6B5B95',
        '#88B04B',
        '#F7CAC9',
        '#92A8D1',
        '#955251',
        '#B565A7',
        '#009B77',
        '#DD4124',
        '#D65076',
        '#45B8AC',
        '#EFC050',
        '#5B5EA6',
        '#9B2335',
        '#DFCFBE',
        '#55B4B0',
        '#E15D44',
        '#7FCDCD',
        '#FF6F61',
        '#A2B9BC',
        '#78866B'
      ];
  return (
    <div {...props}>
      <ResponsiveBar
        data={[data]}
        keys={["end_year","likelihood","intensity","start_year","relevance"]}
        indexBy="country"
        margin={{ top: 0, right: 0, bottom: 100, left: 100 }}
        padding={0.3}
        colors={colors}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
          tickRotation:-90,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
          tickRotation:0,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}