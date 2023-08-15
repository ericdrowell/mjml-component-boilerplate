import * as React from "react";
import {
  Html,
  Head,
  Font,
  Body,
  Section,
  Column,
  Text,
} from "@react-email/components";

export function FontemailEmail(props) {
  return (
    <Html>
      <Head>
        <Font
          attributes={{
            name: "Raleway",
            href: "https://fonts.googleapis.com/css?family=Raleway",
          }}
        />
      </Head>
      <Body>
        <Section>
          <Column>
            <Text style={{ fontFamily: "Raleway, Arial" }}>Hello World!</Text>
          </Column>
        </Section>
      </Body>
    </Html>
  );
}

export default FontemailEmail;
