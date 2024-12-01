import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { DrawerLayout } from "./shared/DrawerLayout";
import { Companies } from "./pages/Companies";
import { Shipments } from "./pages/Shipments";

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
          </Routes>
        </BrowserRouter>
      </Flex>
    </Flex>
  );
}

export default App;
