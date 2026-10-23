import type {Meta} from "@storybook/react";

import React from "react";

import {Button} from "../../components/button";

import {Result} from "./index";

export default {
  component: Result,
  parameters: {
    layout: "centered",
  },
  title: "Components/Layout/Result",
} as Meta<typeof Result>;

export const Default = () => (
  <div style={{width: 390}}>
    <Result>
      <Result.Icon />
      <Result.Title>£50.00 paid</Result.Title>
      <Result.Description>We&apos;ll let Little Nest Nursery know.</Result.Description>
      <Result.Actions>
        <Button>Done</Button>
      </Result.Actions>
    </Result>
  </div>
);

export const Statuses = () => (
  <div className="grid grid-cols-2 gap-4" style={{width: 640}}>
    <Result status="success">
      <Result.Icon />
      <Result.Title>Payment sent</Result.Title>
    </Result>
    <Result status="danger">
      <Result.Icon />
      <Result.Title>Payment failed</Result.Title>
    </Result>
    <Result status="warning">
      <Result.Icon />
      <Result.Title>Check your details</Result.Title>
    </Result>
    <Result status="info">
      <Result.Icon />
      <Result.Title>Payment pending</Result.Title>
    </Result>
  </div>
);
