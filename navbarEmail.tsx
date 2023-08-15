import * as React from "react";
import { Html, Body, Section, Column } from "@react-email/components";
import Navbar from "./Navbar.tsx";
import NavbarLink from "./NavbarLink.tsx";

export function NavbaremailEmail(props) {
  return (
    <Html>
      <Body>
        <Section style={{ backgroundColor: "#ef6451" }}>
          <Column>
            <Navbar>
              <NavbarLink>Getting started</NavbarLink>
              <NavbarLink>Try it live</NavbarLink>
              <NavbarLink>Templates</NavbarLink>
              <NavbarLink>Components</NavbarLink>
            </Navbar>
          </Column>
        </Section>
      </Body>
    </Html>
  );
}

export default NavbaremailEmail;
