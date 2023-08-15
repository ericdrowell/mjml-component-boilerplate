import * as React from "react";
import { Html, Body, Text, Button } from "@react-email/components";
import Hero from "./Hero.tsx";

export function HeroemailEmail(props) {
  return (
    <Html>
      <Body>
        <Hero>
          <Text
            style={{
              padding: "20px",
              color: "#ffffff",
              fontFamily: "Helvetica",
              fontSize: "45px",
              lineHeight: "45px",
              fontWeight: "900",
            }}
            attributes={{ align: "center" }}
          >
            GO TO SPACE
          </Text>
          <Button attributes={{ href: "https://mjml.io/", align: "center" }}>
            ORDER YOUR TICKET NOW
          </Button>
        </Hero>
      </Body>
    </Html>
  );
}

export default HeroemailEmail;
