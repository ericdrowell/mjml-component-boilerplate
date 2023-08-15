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
              <Font font="Ubuntu" />
              <Font font="Roboto" />
            </Head>
            <Body>
              <Heading
                fontSize={32}
                lineHeight={40}
                fontWeight={700}
                color="#000000"
              >
                Your Hero Title
              </Heading>
              <Text
                fontSize={16}
                lineHeight={24}
                fontWeight={400}
                color="#000000"
              >
                Your hero description goes here.
              </Text>
              <Button
                href="#"
                backgroundColor="#000000"
                color="#ffffff"
                borderRadius={4}
                padding="12px 24px"
                fontSize={16}
                lineHeight={24}
                fontWeight={700}
              >
                Call to Action
              </Button>
            </Body>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default Hero;
