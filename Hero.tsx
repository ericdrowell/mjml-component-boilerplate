// Friendly Reminder: This snippet was produced with the assistance of an AI. Always double-check for your specific requirements.
import React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const Hero = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Column>
            <Head>
              <Font
                font="helvetica, arial, sans-serif"
                size={20}
                color="#000000"
              />
            </Head>
            <Heading
              size={24}
              lineHeight={28}
              fontWeight="bold"
              color="#000000"
            >
              Hello, World!
            </Heading>
            <Text size={16} lineHeight={20} color="#000000">
              This is a hero section.
            </Text>
            <Button href="#" backgroundColor="#000000" color="#ffffff">
              Click me
            </Button>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default Hero;
