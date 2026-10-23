import type {Meta} from "@storybook/react";

import React from "react";

import {Button} from "../../components/button";
import {Icon} from "../icon";

import {PageHeader} from "./index";

export default {
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
  },
  title: "Components/Layout/PageHeader",
} as Meta<typeof PageHeader>;

const Frame = ({children}: {children: React.ReactNode}) => (
  <div className="bg-background" style={{width: 390}}>
    {children}
  </div>
);

export const Default = () => (
  <Frame>
    <PageHeader>
      <PageHeader.Toolbar>
        <Button isIconOnly aria-label="Menu">
          <Icon name="menu" size={20} />
        </Button>
        <PageHeader.Actions>
          <Button isIconOnly aria-label="Scan QR code">
            <Icon name="qr-code" size={20} />
          </Button>
          <Button isIconOnly aria-label="Account">
            <Icon name="user" size={20} />
          </Button>
        </PageHeader.Actions>
      </PageHeader.Toolbar>
      <PageHeader.Title>Pay and Request</PageHeader.Title>
    </PageHeader>
  </Frame>
);

export const WithDescription = () => (
  <Frame>
    <PageHeader>
      <PageHeader.Toolbar>
        <Button isIconOnly aria-label="Back">
          <Icon name="arrow-left" size={20} />
        </Button>
      </PageHeader.Toolbar>
      <PageHeader.Title>Childcare accounts</PageHeader.Title>
      <PageHeader.Description>
        Tax-Free Childcare and voucher accounts you pay from.
      </PageHeader.Description>
    </PageHeader>
  </Frame>
);
