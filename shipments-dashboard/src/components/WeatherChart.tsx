import { Line } from "react-chartjs-2";
import { Box, Flex, Text } from "@chakra-ui/react";

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

interface Props {
  humidity?: Humidity[];
  temp?: Temperature[];
}
interface Humidity {
  t: number;
  v: number;
}
interface Temperature {
  t: number;
  v: number;
}

const WeatherChart = ({ humidity, temp }: Props) => {
  const humidityNumbers = humidity
    ? humidity?.filter((item) => item.v != null).map((hum) => hum.v)
    : [];
  const temperaturNumbers = temp ? temp?.map((tem) => tem.v) : [];
  const data = {
    labels: humidity
      ? humidity.map((hum) => {
          const date = new Date(hum.t);

          return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23",
          });
        })
      : temp?.map((tem) => {
          const date = new Date(tem.t);

          return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23",
          });
        }),

    datasets: [
      {
        label: `${humidity ? "Humidity" : "Temperature"}`,
        data: humidity
          ? humidity.map((hum) => hum.v)
          : temp?.map((tem) => tem.v),

        fill: false,
        borderColor: "#FFA500",
        pointBorderColor: "#ffffff",
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    layout: {
      padding: {
        top: 25,
        bottom: 35,
        left: 20,
        right: 15,
      },
    },
    scales: {
      x: {
        display: false,
        min: 2,
      },
      y: {
        display: false,
        min: humidity
          ? Math.min(...humidityNumbers) - 16
          : Math.min(...temperaturNumbers) - 16,
        max: humidity
          ? Math.max(...humidityNumbers) + 16
          : Math.max(...temperaturNumbers) + 16,
      },
    },
    elements: {
      point: {
        radius: 2,
        backgroundColor: "#fff",
        border: "none",
      },
    },
  };
  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <Flex>
        <Text>{humidity ? "Humidity" : "Temperatures"}</Text>
      </Flex>
      <Box h="180px" bg="lightgray">
        <Line
          data={data}
          options={options}
          plugins={[
            {
              id: "custom_labels",
              afterDraw: (chart) => {
                const ctx = chart.ctx;
                const dataset = chart.data.datasets[0];
                const meta = chart.getDatasetMeta(0);

                const labels = chart.data.labels as string[];

                labels.forEach((label, index) => {
                  const value = dataset.data[index];
                  if (value == null) return;
                  const point = meta.data[index].getProps(["x", "y"], true);

                  ctx.font = "bold 12px Inter";
                  ctx.fillStyle = "black";
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";

                  const x = point.x;
                  const y = point.y - 15;
                  ctx.fillText(`${dataset.data[index]}°`, x, y);

                  ctx.font = "normal 9px Inter";
                  ctx.fillStyle = "black";
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";
                  const windLabelY = point.y + 52;
                  ctx.fillText(label, x, windLabelY);
                });
              },
            },
          ]}
          height={100}
        />
      </Box>
    </Box>
  );
};

export default WeatherChart;
