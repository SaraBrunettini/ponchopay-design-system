import type {Meta} from "@storybook/react";

import React from "react";

import {Description} from "../../components/description";
import {Label} from "../../components/label";
import {Radio} from "../../components/radio";
import {RadioGroup} from "../../components/radio-group";

import {FormItem} from "./index";

export default {
  component: FormItem,
  parameters: {
    layout: "centered",
  },
  title: "Components/Forms/FormItem",
} as Meta<typeof FormItem>;

const Plan = ({children, value}: {value: string; children: React.ReactNode}) => (
  <Radio value={value}>
    <Radio.Content>
      <Radio.Control>
        <Radio.Indicator />
      </Radio.Control>
      <Label>{children}</Label>
    </Radio.Content>
  </Radio>
);

export const Default = () => (
  <div style={{width: 340}}>
    <FormItem>
      <Label>How often?</Label>
      <RadioGroup aria-label="How often?" defaultValue="once" name="frequency">
        <Plan value="once">One-off payment</Plan>
        <Plan value="monthly">Every month</Plan>
      </RadioGroup>
      <Description>You can change this later.</Description>
    </FormItem>
  </div>
);

export const WithError = () => (
  <div style={{width: 340}}>
    <FormItem error="Choose how often you want to pay.">
      <Label>How often?</Label>
      <RadioGroup aria-label="How often?" name="frequency-error">
        <Plan value="once">One-off payment</Plan>
        <Plan value="monthly">Every month</Plan>
      </RadioGroup>
    </FormItem>
  </div>
);
