import { Button, Flex, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.jpg";
import { MdCorporateFare } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const DrawerLayout = () => {
  const navigate = useNavigate();

  return (
    <Flex
      bg="white"
      position="relative"
      direction="column"
      alignItems="center"
      gap="1rem"
      p={6}
      minW="243px"
    >
      <Flex
        borderBottom="1px solid #f7f7f7"
        pb={5}
        justifyContent="center"
        w="100%"
      >
        <Flex maxH="72px">
          <Image src={Logo} maxH="72px" alt="logo" />
        </Flex>
      </Flex>
      <Flex direction="column" alignItems="start" pt="12px">
        <Flex w="100%">
          <Button
            bg="transparent"
            color="black"
            _hover={{ bg: "#0066cc1f" }}
            onClick={() => navigate("/companies")}
          >
            {" "}
            <MdCorporateFare /> Companies{" "}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
