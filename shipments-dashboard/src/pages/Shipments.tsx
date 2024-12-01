import { Box, Flex, Text } from "@chakra-ui/react";
import {  fetchShipments } from "@/api";
import { useEffect, useState } from "react";
import { ShipmentsList } from "@/components/ShipmentsList";

export const Shipments =  () => {
const [shipments, setShipments] =useState({}); 
const companyId = window.location.pathname.split("/").slice(-1);

useEffect(()=>{
  fetchShipments(companyId[0]).then(res=>setShipments(res));
},[])

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
            Shipments
          </Text>
          <Text fontSize="12px" fontWeight="500">
          Shipments List
          </Text>
        </Flex>
      </Box>
      <Flex
        direction="column"
        paddingInline="1rem"
        borderRadius="1rem"
        bg="#fff"
        height="73vh"
      >
        <ShipmentsList data={shipments}/>
      </Flex>
    </Flex>
  );
};
