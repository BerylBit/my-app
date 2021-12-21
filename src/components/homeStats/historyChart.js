import React,{useRef} from "react";
import { Box, Text } from "@chakra-ui/react";
import { LineChart } from '@opd/g2plot-react'

const HistoryChart = () => {
    const config = {
        autoFit: true,
        xField: 'year',
        yField: 'value',
        smooth: true,
        meta: {
          value: {
            max: 15,
          },
        },
        data: [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 11 },
        ],
      }
      const chartRef = useRef()
  return (
    <Box padding="0 24px">
      <Text fontSize="12px" color="#77838f">
        BRB TRANSACTION HISTORY LAST 14 DAYS
      </Text>
      <LineChart style={{maxHeight:'120px',marginTop:'15px'}} {...config} chartRef={chartRef} />
    </Box>
  );
};

export default HistoryChart;
