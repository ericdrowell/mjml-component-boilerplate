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

const ImageText = ({ src, alt, text }) => {
  return (
    <Container>
      <Head>
        <Font />
      </Head>
      <Body>
        <Section>
          <Row>
            <Column>
              <Img src={src} alt={alt} />
            </Column>
            <Column>
              <Text>{text}</Text>
            </Column>
          </Row>
        </Section>
      </Body>
    </Container>
  );
};

export default ImageText;
