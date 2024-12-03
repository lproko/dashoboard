import { Line } from "react-chartjs-2";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Clock from "../assets/charticons/Clock.svg";
import Icon1 from "../assets/charticons/117.png";
import Icon2 from "../assets/charticons/113.png";
import Icon3 from "../assets/charticons/200 386.png";
import Icon4 from "../assets/charticons/389.png";
import Icon5 from "../assets/charticons/390.png";
import Icon6 from "../assets/charticons/392.png";
import Icon7 from "../assets/charticons/icon.png";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const weatherIcons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];

interface Label {
  time: string;
  wind: string;
}

const data = {
  labels: [
    { time: "Now", wind: "11.7km/h" },
    { time: "22:00", wind: "9.3km/h" },
    { time: "00:00", wind: "12km/h" },
    { time: "2:00", wind: "15km/h" },
    { time: "4:00", wind: "15km/h" },
    { time: "6:00", wind: "15km/h" },
    { time: "8:00", wind: "15km/h" },
  ],
  datasets: [
    {
      label: "Temperature",
      data: [26, 26, 22, 16, 20, 22, 16],
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
    },
    y: {
      display: false,
      min: 10,
      max: 30,
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

const WeatherChart = () => {
  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <Flex>
        <img src={Clock} alt="" />{" "}
        <Text>Temperatures</Text>
      </Flex>
      <Box h='180px' bg="lightgray">
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

                const labels = chart.data.labels as Label[];

                labels.forEach((label, index) => {
                  const point = meta.data[index].getProps(["x", "y"], true);

                  ctx.font = "bold 12px Inter";
                  ctx.fillStyle = "black";
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";

                  const x = point.x;
                  const y = point.y - 15;
                  ctx.fillText(`${dataset.data[index]}°`, x, y);

                  // Draw wind label
                  ctx.font = "normal 9px Inter";
                  ctx.fillStyle = "black";
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";
                  const windLabelY = point.y + 52;
                  ctx.fillText(label.wind, x, windLabelY);

                  // Draw time label
                  const timeLabelY = point.y + 65;
                  ctx.fillText(label.time, x, timeLabelY);

                  // Draw weather icon
                  const img = new Image();
                  img.src = weatherIcons[index];
                  const iconSize = 20;
                  const iconX = x - iconSize / 2;
                  const iconY = point.y + 25;

                  img.onload = () => {
                    ctx.drawImage(img, iconX, iconY, iconSize, iconSize);
                  };
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