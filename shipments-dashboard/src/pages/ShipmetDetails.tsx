import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Map } from "../components/Map.tsx";
import WeatherChart from "@/components/WeatherChart.tsx";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchShipmentDetails } from "@/api.tsx";

interface Humidity {
  t: number;
  v: number;
}
interface Temperature {
  t: number;
  v: number;
}

export const ShipmetDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [longtitude, setLongtitude] = useState<number>();
  const [lattitude, setLatitude] = useState<number>();
  const [humidity, setHumidity] = useState<Humidity[]>();
  const [temperature, setTemperature] = useState<Temperature[]>();
  useEffect(() => {
    fetchShipmentDetails(id as string).then((res) => {
      setLongtitude(res[0].lng);
      setLatitude(res[0].lat);
      setHumidity(res[0].humidity);
      setTemperature(res[0].temperature);
    });
  }, []);
  return (
    lattitude &&
    longtitude &&
    humidity &&
    temperature && (
      <Flex
        paddingInline="32px"
        direction="column"
        flex="1"
        maxH="100%"
        maxW="1600px"
        overflow="auto"
        position="relative"
      >
        <Box position="sticky" top="0">
          <Flex
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
            h="120px"
            w="100%"
          >
            <Flex w="60%" direction="column">
              <Text fontSize="20px" fontWeight="700">
                Shipment
              </Text>
              <Text fontSize="12px" fontWeight="500">
                Shipment Details
              </Text>
            </Flex>
            <Flex w="40%" justifyContent="flex-end">
              <Button
                bg="transparent"
                color="black"
                _hover={{ bg: "#0066cc1f" }}
                onClick={() => navigate(-1)}
              >
                {" "}
                <FiArrowLeft /> Back to shipments
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Flex
          direction="column"
          paddingInline="1rem"
          borderRadius="1rem"
          bg="#fff"
          height="81vh"
        >
          <Flex mt="1rem" w="100%" h="50%">
            <Map lat={lattitude} long={longtitude} />
          </Flex>
          <Flex w="100%" h="275px">
            <WeatherChart humidity={humidity} />
          </Flex>
          <Flex w="100%" h="275px">
            <WeatherChart temp={temperature} />
          </Flex>
        </Flex>
      </Flex>
    )
  );
};
