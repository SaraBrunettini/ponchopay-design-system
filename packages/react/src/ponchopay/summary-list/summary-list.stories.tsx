import type {Meta} from "@storybook/react";

import React from "react";

import {Icon} from "../icon";

import {SummaryList} from "./index";

export default {
  component: SummaryList,
  parameters: {
    layout: "centered",
  },
  title: "Components/Layout/SummaryList",
} as Meta<typeof SummaryList>;

export const Default = () => (
  <div style={{width: 342}}>
    <SummaryList>
      <SummaryList.Row>
        <SummaryList.Label>Amount</SummaryList.Label>
        <SummaryList.Value>£50.00</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Label>
          PonchoPay fee
          <Icon label="About fees" name="info" />
        </SummaryList.Label>
        <SummaryList.Value>£0.00</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Label>Estimated arrival</SummaryList.Label>
        <SummaryList.Value>In seconds</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row isTotal>
        <SummaryList.Label>Total</SummaryList.Label>
        <SummaryList.Value>£50.00</SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  </div>
);
