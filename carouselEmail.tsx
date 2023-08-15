import * as React from "react";
import { Html, Body, Section, Column } from "@react-email/components";
import Carousel from "./Carousel.tsx";
import CarouselImage from "./CarouselImage.tsx";

export function CarouselemailEmail(props) {
  return (
    <Html>
      <Body>
        <Section>
          <Column>
            <Carousel>
              <CarouselImage />
              <CarouselImage />
              <CarouselImage />
            </Carousel>
          </Column>
        </Section>
      </Body>
    </Html>
  );
}

export default CarouselemailEmail;
