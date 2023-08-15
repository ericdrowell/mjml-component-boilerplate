import * as React from "react";
import { Html, Head, Body, Section, Column } from "@react-email/components";
import Attributes from "./Attributes.tsx";
import Accordion from "./Accordion.tsx";
import AccordionElement from "./AccordionElement.tsx";
import AccordionTitle from "./AccordionTitle.tsx";
import AccordionText from "./AccordionText.tsx";

export function AccordionemailEmail(props) {
  return (
    <Html>
      <Head>
        <Attributes>
          <Accordion />
          <AccordionElement />
          <AccordionTitle />
          <AccordionText />
        </Attributes>
      </Head>
      <Body>
        <Section style={{ padding: "20px", backgroundColor: "#ffffff" }}>
          <Column style={{ backgroundColor: "#dededd" }}>
            <Accordion>
              <AccordionElement>
                <AccordionTitle>Why use an accordion?</AccordionTitle>
                <AccordionText>
                  <span style="line-height:20px">
                    Because emails with a lot of content are most of the time a
                    very bad experience on mobile, mj-accordion comes handy when
                    you want to deliver a lot of information in a concise way.
                  </span>
                </AccordionText>
              </AccordionElement>
              <AccordionElement>
                <AccordionTitle>How it works</AccordionTitle>
                <AccordionText>
                  <span style="line-height:20px">
                    Content is stacked into tabs and users can expand them at
                    will. If responsive styles are not supported (mostly on
                    desktop clients), tabs are then expanded and your content is
                    readable at once.
                  </span>
                </AccordionText>
              </AccordionElement>
            </Accordion>
          </Column>
        </Section>
      </Body>
    </Html>
  );
}

export default AccordionemailEmail;
