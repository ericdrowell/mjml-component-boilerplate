import * as React from "react";
import {
  Html,
  Body,
  Section,
  Row,
  Column,
  Img,
  Text,
} from "@react-email/components";

export function ResponsiveemailEmail(props) {
  return (
    <Html>
      <Body>
        <Section>
          <Row>
            <Column>
              <Img
                style={{
                  width: "137px",
                  height: "185px",
                  padding: "0",
                  src: "https://mjml.io/assets/img/easy-and-quick.png",
                }}
              />
              <Text attributes={{ align: "center" }}>
                <h2>Easy and quick</h2>
                <p>
                  Write less code, save time and code more efficiently with
                  MJML’s semantic syntax.
                </p>
              </Text>
            </Column>
            <Column>
              <Img
                style={{
                  width: "166px",
                  height: "185px",
                  padding: "0",
                  src: "https://mjml.io/assets/img/responsive.png",
                }}
              />
              <Text attributes={{ align: "center" }}>
                <h2>Responsive</h2>
                <p>
                  MJML is responsive by design on most-popular email clients,
                  even Outlook.
                </p>
              </Text>
            </Column>
          </Row>
        </Section>
      </Body>
    </Html>
  );
}

export default ResponsiveemailEmail;
