import type {Meta} from "@storybook/react";

import React from "react";

import {Icon} from "../icon";

import {BottomNav} from "./index";

export default {
  component: BottomNav,
  parameters: {
    layout: "fullscreen",
  },
  title: "Components/Layout/BottomNav",
} as Meta<typeof BottomNav>;

export const Default = () => (
  <div className="bg-background" style={{paddingTop: 40, width: 390}}>
    <BottomNav>
      <BottomNav.Item href="#">
        <Icon name="house" size={24} />
        Home
      </BottomNav.Item>
      <BottomNav.Item href="#">
        <Icon name="wallet" size={24} />
        Accounts
      </BottomNav.Item>
      <BottomNav.Action isCurrent href="#">
        <Icon name="arrow-up-down" size={24} />
        Pay
      </BottomNav.Action>
      <BottomNav.Item href="#">
        <Icon name="receipt-text" size={24} />
        Activity
      </BottomNav.Item>
      <BottomNav.Item href="#">
        <Icon name="user" size={24} />
        Profile
      </BottomNav.Item>
    </BottomNav>
  </div>
);

export const WithoutAction = () => (
  <div className="bg-background" style={{paddingTop: 16, width: 390}}>
    <BottomNav>
      <BottomNav.Item isCurrent href="#">
        <Icon name="house" size={24} />
        Home
      </BottomNav.Item>
      <BottomNav.Item href="#">
        <Icon name="calendar" size={24} />
        Bookings
      </BottomNav.Item>
      <BottomNav.Item href="#">
        <Icon name="receipt-text" size={24} />
        Activity
      </BottomNav.Item>
      <BottomNav.Item href="#">
        <Icon name="user" size={24} />
        Profile
      </BottomNav.Item>
    </BottomNav>
  </div>
);
