import { chakra, Container } from "@chakra-ui/react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <chakra.footer
      py={4}
      color={"white"}
      className={`bottom-0 z-50  left-0 bg-white`}
    >
      <Container maxW={"container.lg"}>
        <p className={"text-center text-xs text-black"}>© 2024 Yamayamaaya</p>
      </Container>
    </chakra.footer>
  );
};
