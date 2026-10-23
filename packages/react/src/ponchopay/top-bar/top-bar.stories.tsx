import type {Meta} from "@storybook/react";

import React from "react";

import {Button} from "../../components/button";
import {SearchField} from "../../components/search-field";
import {Icon} from "../icon";

import {TopBar} from "./index";

export default {
  component: TopBar,
  parameters: {
    layout: "fullscreen",
  },
  title: "Components/Layout/TopBar",
} as Meta<typeof TopBar>;

const Frame = ({children}: {children: React.ReactNode}) => (
  <div className="bg-surface" style={{width: 390}}>
    {children}
  </div>
);

const BackButton = () => (
  <Button isIconOnly aria-label="Back" variant="ghost">
    <Icon name="arrow-left" size={20} />
  </Button>
);

export const Default = () => (
  <Frame>
    <TopBar>
      <TopBar.Start>
        <BackButton />
      </TopBar.Start>
      <TopBar.Title>Amount</TopBar.Title>
    </TopBar>
  </Frame>
);

export const WithClose = () => (
  <Frame>
    <TopBar>
      <TopBar.Start>
        <BackButton />
      </TopBar.Start>
      <TopBar.Title>Review</TopBar.Title>
      <TopBar.End>
        <Button isIconOnly aria-label="Close" variant="ghost">
          <Icon name="x" size={20} />
        </Button>
      </TopBar.End>
    </TopBar>
  </Frame>
);

export const WithSearch = () => (
  <Frame>
    <TopBar>
      <TopBar.Start>
        <BackButton />
      </TopBar.Start>
      <TopBar.Content>
        <SearchField aria-label="Search providers" className="w-full" name="search">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Nursery, club or provider" />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </TopBar.Content>
      <TopBar.End>
        <Button isIconOnly aria-label="Scan QR code" variant="ghost">
          <Icon name="qr-code" size={20} />
        </Button>
      </TopBar.End>
    </TopBar>
  </Frame>
);
