import { BoxProps, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Footer: FC<BoxProps> = (props) => {
  return (
    <HStack w="full" py="0" position="relative" {...props}>
      <Text
        display="inline-block"
        flexGrow={1}
        textAlign="center"
        color="gray.500"
        fontSize="xs"
      >
        Forked by Mahyar{" "}
        <Text as="span" color="red.500" fontWeight="bold">
          ❤️
        </Text>
      </Text>
    </HStack>
  );
};
