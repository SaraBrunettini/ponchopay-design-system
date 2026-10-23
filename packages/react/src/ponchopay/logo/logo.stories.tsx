import type {LogoProps} from "./index";
import type {Meta} from "@storybook/react";

import React from "react";

import {Logo} from "./index";

export default {
  argTypes: {
    height: {control: "number"},
    theme: {
      control: "select",
      options: ["auto", "light", "dark"],
    },
    variant: {
      control: "select",
      options: ["logo", "symbol"],
    },
  },
  component: Logo,
  parameters: {
    layout: "centered",
  },
  title: "Components/Brand/Logo",
} as Meta<typeof Logo>;

const defaultArgs: LogoProps = {};

const Template = (props: LogoProps) => <Logo {...props} />;

const VariantsTemplate = () => (
  <div className="flex items-center gap-8">
    <Logo />
    <Logo variant="symbol" />
  </div>
);

const SizesTemplate = () => (
  <div className="flex flex-col items-start gap-6">
    <Logo height={20} />
    <Logo height={32} />
    <Logo height={48} />
  </div>
);

const OnDarkTemplate = () => (
  <div className="flex items-center gap-8 rounded-2xl p-6" style={{background: "#1A2535"}}>
    <Logo theme="dark" />
    <Logo theme="dark" variant="symbol" />
  </div>
);

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const Variants = {
  args: defaultArgs,
  render: VariantsTemplate,
};

export const Sizes = {
  args: defaultArgs,
  render: SizesTemplate,
};

export const OnDark = {
  args: defaultArgs,
  render: OnDarkTemplate,
};
