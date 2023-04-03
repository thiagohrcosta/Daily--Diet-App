import * as React from "react"
import {
  Box,
  ChakraProvider,
  Text,
} from "@chakra-ui/react"
import { theme } from "./styles/themes"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      bg={theme.colors.primary}
      h="100vh"
    >
      <Text
        color={theme.colors.redDark}
      >
        Hello World
      </Text>
    </Box>
  </ChakraProvider>
)
