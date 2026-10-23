import type {IconProps} from "./index";
import type {Meta} from "@storybook/react";

import React from "react";

import {Button} from "../../components/button";

import {Icon} from "./index";

export default {
  argTypes: {
    name: {control: "text"},
    size: {control: "number"},
    spin: {control: "boolean"},
  },
  component: Icon,
  parameters: {
    layout: "centered",
  },
  title: "Components/Brand/Icon",
} as Meta<typeof Icon>;

const defaultArgs: IconProps = {name: "piggy-bank"};

const COMMON = [
  "chevron-down",
  "chevron-right",
  "check",
  "x",
  "plus",
  "minus",
  "search",
  "ellipsis",
  "circle-check",
  "circle-alert",
  "info",
  "triangle-alert",
  "calendar",
  "settings",
  "user",
  "log-out",
  "trash-2",
  "mail",
];

const PAYMENT = [
  "piggy-bank",
  "ticket",
  "credit-card",
  "brand-apple",
  "brand-google",
  "brand-klarna",
  "landmark",
];

const Template = (props: IconProps) => <Icon {...props} />;

const GridTemplate = ({names}: {names: string[]}) => (
  <div className="grid grid-cols-4 gap-4">
    {names.map((name) => (
      <div key={name} className="flex flex-col items-center gap-2">
        <Icon name={name} size={20} />
        <span className="text-xs text-muted">{name}</span>
      </div>
    ))}
  </div>
);

const SizesTemplate = () => (
  <div className="flex items-center gap-4">
    <Icon name="credit-card" size={12} />
    <Icon name="credit-card" size={16} />
    <Icon name="credit-card" size={20} />
    <Icon name="credit-card" size={24} />
  </div>
);

const InButtonTemplate = () => (
  <div className="flex items-center gap-3">
    <Button>
      <Icon name="mail" /> Login with Email
    </Button>
    <Button isDisabled variant="secondary">
      <Icon spin label="Loading" name="loader-circle" /> Please wait
    </Button>
  </div>
);

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const Common = {
  args: defaultArgs,
  render: () => <GridTemplate names={COMMON} />,
};

export const PaymentMethods = {
  args: defaultArgs,
  render: () => <GridTemplate names={PAYMENT} />,
};

export const Sizes = {
  args: defaultArgs,
  render: SizesTemplate,
};

export const InButton = {
  args: defaultArgs,
  render: InButtonTemplate,
};
