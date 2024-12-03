import { Box, Flex, Text } from "@chakra-ui/react";
import { Map } from "../components/Map.tsx";
import WeatherChart from "@/components/WeatherChart.tsx";

export const ShipmetDetails = () => {
  return (
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
          justifyContent="center"
          alignContent="center"
          alignItems="left"
          h="120px"
          w="100%"
          direction="column"
        >
          <Text fontSize="20px" fontWeight="700">
            Shipment
          </Text>
          <Text fontSize="12px" fontWeight="500">
            Shipment Details
          </Text>
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
          <Map />
        </Flex>
        <Flex w="100%" h="275px"><WeatherChart/></Flex>
        <Flex w="100%" h="275px"><WeatherChart/></Flex>
      </Flex>
    </Flex>
  );
};
