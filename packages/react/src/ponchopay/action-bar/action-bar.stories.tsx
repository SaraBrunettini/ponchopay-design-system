import type {Meta} from "@storybook/react";

import React from "react";

import {Button} from "../../components/button";

import {ActionBar} from "./index";

export default {
  component: ActionBar,
  parameters: {
    layout: "centered",
  },
  title: "Components/Layout/ActionBar",
} as Meta<typeof ActionBar>;

export const Default = () => (
  <div className="bg-surface" style={{width: 390}}>
    <ActionBar>
      <Button variant="secondary">Request</Button>
      <Button>Pay</Button>
    </ActionBar>
  </div>
);

export const Single = () => (
  <div className="bg-surface" style={{width: 390}}>
    <ActionBar>
      <Button>Continue</Button>
    </ActionBar>
  </div>
);

export const Vertical = () => (
  <div className="bg-surface" style={{width: 390}}>
    <ActionBar orientation="vertical">
      <Button>Set up Tax-Free Childcare</Button>
      <Button variant="ghost">Not now</Button>
    </ActionBar>
  </div>
);
