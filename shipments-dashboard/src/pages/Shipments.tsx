import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { fetchShipments } from "@/api";
import { useEffect, useState } from "react";
import { ShipmentsList } from "@/components/ShipmentsList";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export const Shipments = () => {
  const navigate = useNavigate();
  const [shipments, setShipments] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchShipments(id as string).then((res) => setShipments(res));
  }, []);

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
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
          h="120px"
          w="100%"
        >
          {" "}
          <Flex w="60%" direction="column">
            <Text fontSize="20px" fontWeight="700">
              Shipments
            </Text>
            <Text fontSize="12px" fontWeight="500">
              Shipments List
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
              <FiArrowLeft /> Back to Companies
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Flex
        direction="column"
        paddingInline="1rem"
        borderRadius="1rem"
        bg="#fff"
        height="73vh"
      >
        <ShipmentsList data={shipments} />
      </Flex>
    </Flex>
  );
};
