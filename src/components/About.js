import { FaHtml5, FaJs, FaCss3, FaReact, FaDocker, FaGithub, FaSass } from "react-icons/fa";
import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
    return (
      <>
        <Container maxW={"3xl"} id="about">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  01
                </Text>
                <Text fontWeight={800}>Sobre&nbsp;mi</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <Text color={"white.600"} fontSize={"xl"} px={4}>
              {profile.about}
              <Stack align="center" direction="row" px={4} justifyContent="center">
                <HStack mx={4} justify="center">
                  <FaJs color={`${color}.400`} size="1.5em" />
                  <FaHtml5 color={`${color}.400`} size="1.5em" />
                  <FaCss3 color={`${color}.400`} size="1.5em" />
                  <FaReact color={`${color}.400`} size="1.5em" />
                  <FaDocker color={`${color}.400`} size="1.5em" />
                  <FaGithub color={`${color}.400`} size="1.5em" />
                  <FaSass color={`${color}.400`} size="1.5em" />
                </HStack>
              </Stack>
            </Text>
          </Stack>
        </Container>
      </>
    );
}

