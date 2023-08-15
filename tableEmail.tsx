import * as React from "react";
import { Html, Body, Section, Column } from "@react-email/components";
import Table from "./Table.tsx";

export function TableemailEmail(props) {
  return (
    <Html>
      <Body>
        <Section>
          <Column>
            <Table>
              <tr style="border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;">
                <th style="padding: 0 15px 0 0;">Year</th>
                <th style="padding: 0 15px;">Language</th>
                <th style="padding: 0 0 0 15px;">Inspired from</th>
              </tr>
              <tr>
                <td style="padding: 0 15px 0 0;">1995</td>
                <td style="padding: 0 15px;">PHP</td>
                <td style="padding: 0 0 0 15px;">C, Shell Unix</td>
              </tr>
              <tr>
                <td style="padding: 0 15px 0 0;">1995</td>
                <td style="padding: 0 15px;">JavaScript</td>
                <td style="padding: 0 0 0 15px;">Scheme, Self</td>
              </tr>
            </Table>
          </Column>
        </Section>
      </Body>
    </Html>
  );
}

export default TableemailEmail;
