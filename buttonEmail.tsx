import * as React from "react";
import { Html, Body, Section, Column, Button } from "@react-email/components";

export function ButtonemailEmail(props) {
  return (
    <Html>
      <Body>
        <Section>
          <Column>
            <Button
              style={{
                fontFamily: "Helvetica",
                backgroundColor: "#f45e43",
                color: "white",
              }}
            >
              Don't click me!
            </Button>
          </Column>
        </Section>
      </Body>
    </Html>
  );
}

export default ButtonemailEmail;
