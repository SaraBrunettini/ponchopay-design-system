import type {Meta} from "@storybook/react";

import React from "react";

import {Avatar} from "../../components/avatar";
import {Button} from "../../components/button";
import {Card} from "../../components/card";
import {Input} from "../../components/input";
import {SearchField} from "../../components/search-field";
import {TextField} from "../../components/textfield";
import {ActionBar} from "../action-bar";
import {BottomNav} from "../bottom-nav";
import {Icon} from "../icon";
import {List} from "../list";
import {PageHeader} from "../page-header";
import {Result} from "../result";
import {SummaryList} from "../summary-list";
import {TopBar} from "../top-bar";

import {Page} from "./index";

export default {
  component: Page,
  parameters: {
    layout: "centered",
  },
  title: "Components/Layout/Page",
} as Meta<typeof Page>;

/** Phone-sized frame so each story reads as one app screen. */
const Phone = ({children}: {children: React.ReactNode}) => (
  <div
    className="overflow-hidden rounded-3xl border border-border"
    style={{display: "flex", height: 640, width: 360}}
  >
    {children}
  </div>
);

const PROVIDERS = [
  {description: "Last paid 3 Oct", initials: "LN", name: "Little Nest Nursery"},
  {description: "Last paid 21 Sep", initials: "SC", name: "Sunrise Holiday Club"},
];

const AppNav = () => (
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
);

const BackButton = () => (
  <Button isIconOnly aria-label="Back" variant="ghost">
    <Icon name="arrow-left" size={20} />
  </Button>
);

export const Home = () => (
  <Phone>
    <Page>
      <Page.Header>
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
      </Page.Header>
      <Page.Content>
        <SearchField aria-label="Search providers" name="search">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Nursery, club or provider" />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
        <Card>
          <List>
            <List.Heading>Suggested</List.Heading>
            <List.Item>
              <List.Media>
                <Avatar color="accent" size="lg">
                  <Avatar.Fallback>
                    <Icon name="link" size={20} />
                  </Avatar.Fallback>
                </Avatar>
              </List.Media>
              <List.Content>
                <List.Title>Pay with a link</List.Title>
                <List.Description>Share it over text, email or any app.</List.Description>
              </List.Content>
              <List.End>
                <Icon label="More info" name="circle-help" size={20} />
              </List.End>
            </List.Item>
            {PROVIDERS.map((p) => (
              <List.Item key={p.name}>
                <List.Media>
                  <Avatar size="lg">
                    <Avatar.Fallback>{p.initials}</Avatar.Fallback>
                  </Avatar>
                </List.Media>
                <List.Content>
                  <List.Title>{p.name}</List.Title>
                  <List.Description>{p.description}</List.Description>
                </List.Content>
                <List.End>
                  <Icon label="More info" name="info" size={20} />
                </List.End>
              </List.Item>
            ))}
          </List>
        </Card>
      </Page.Content>
      <Page.Footer>
        <AppNav />
      </Page.Footer>
    </Page>
  </Phone>
);

export const Amount = () => (
  <Phone>
    <Page variant="surface">
      <Page.Header>
        <TopBar>
          <TopBar.Start>
            <BackButton />
          </TopBar.Start>
          <TopBar.Title>Amount</TopBar.Title>
        </TopBar>
      </Page.Header>
      <Page.Content>
        <List>
          <List.Item>
            <List.Media>
              <Avatar size="lg">
                <Avatar.Fallback>LN</Avatar.Fallback>
              </Avatar>
            </List.Media>
            <List.Content>
              <List.Title>Little Nest Nursery</List.Title>
              <List.Description>Ref. LN-20431</List.Description>
            </List.Content>
          </List.Item>
        </List>
        <div className="flex items-center justify-between">
          <span className="text-5xl font-bold tracking-tight">£50</span>
          <Button size="sm" variant="outline">
            GBP
            <Icon name="chevron-down" />
          </Button>
        </div>
      </Page.Content>
      <Page.Footer>
        <div className="px-4">
          <TextField aria-label="Note" name="note">
            <Input placeholder="Add a note" variant="secondary" />
          </TextField>
        </div>
        <ActionBar>
          <Button variant="secondary">Request</Button>
          <Button>Pay</Button>
        </ActionBar>
      </Page.Footer>
    </Page>
  </Phone>
);

export const Review = () => (
  <Phone>
    <Page variant="surface">
      <Page.Header>
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
      </Page.Header>
      <Page.Content>
        <List>
          <List.Item href="#">
            <List.Media>
              <Icon name="piggy-bank" size={24} />
            </List.Media>
            <List.Content>
              <List.Title>Tax-Free Childcare</List.Title>
              <List.Description>Government top-up included</List.Description>
            </List.Content>
            <List.End>
              <Icon name="chevron-right" size={20} />
            </List.End>
          </List.Item>
          <List.Item href="#">
            <List.Media>
              <Icon name="calendar" size={24} />
            </List.Media>
            <List.Content>
              <List.Title>October sessions</List.Title>
              <List.Description>Little Nest Nursery</List.Description>
            </List.Content>
            <List.End>
              <Icon name="chevron-right" size={20} />
            </List.End>
          </List.Item>
        </List>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Label>Your payment</SummaryList.Label>
            <SummaryList.Value>£40.00</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Label>
              Government top-up
              <Icon label="About top-ups" name="info" />
            </SummaryList.Label>
            <SummaryList.Value>£10.00</SummaryList.Value>
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
      </Page.Content>
      <Page.Footer>
        <ActionBar>
          <Button>Pay £50.00</Button>
        </ActionBar>
      </Page.Footer>
    </Page>
  </Phone>
);

export const Success = () => (
  <Phone>
    <Page variant="surface">
      <Page.Header>
        <TopBar>
          <TopBar.End>
            <Button isIconOnly aria-label="Close" variant="ghost">
              <Icon name="x" size={20} />
            </Button>
          </TopBar.End>
        </TopBar>
      </Page.Header>
      <Page.Content className="justify-center">
        <Result>
          <Result.Icon />
          <Result.Title>£50.00 paid</Result.Title>
          <Result.Description>
            &ldquo;October sessions&rdquo; &middot; We&apos;ll let Little Nest Nursery know.
          </Result.Description>
          <Result.Actions>
            <Button>Done</Button>
          </Result.Actions>
        </Result>
      </Page.Content>
    </Page>
  </Phone>
);
