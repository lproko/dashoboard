import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { DrawerLayout } from "./shared/DrawerLayout";
import { Companies } from "./pages/Companies";
import { Shipments } from "./pages/Shipments";
import { ShipmetDetails } from "./pages/ShipmetDetails";

function App() {
  return (
    <Flex position="relative" h="100vh" direction="column">
      <Flex flexGrow="1" maxW="100vw">
        <BrowserRouter>
          <DrawerLayout />

          <Routes>
            <Route path="/" element={<Companies />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/shipments/:id" element={<Shipments />} />
            <Route path="/details/:id" element={<ShipmetDetails />} />
          </Routes>
        </BrowserRouter>
      </Flex>
    </Flex>
  );
}

export default App;
