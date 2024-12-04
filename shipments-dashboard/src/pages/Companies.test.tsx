import { render, screen } from "@testing-library/react";
import "core-js/stable/structured-clone";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import Companies from "./Companies";

// Create a QueryClient instance
describe("Company component", () => {
  test("renders Companies", () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <Companies />
      </ChakraProvider>
    );
    // Check if the heading is rendered
    expect(screen.getByText(/Companies List/i)).toBeInTheDocument();
  });
});
