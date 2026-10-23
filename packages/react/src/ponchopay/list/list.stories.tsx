import type {Meta} from "@storybook/react";

import React from "react";

import {Avatar} from "../../components/avatar";
import {Card} from "../../components/card";
import {Icon} from "../icon";

import {List} from "./index";

export default {
  component: List,
  parameters: {
    layout: "centered",
  },
  title: "Components/Layout/List",
} as Meta<typeof List>;

export const Default = () => (
  <Card style={{width: 390}}>
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
      <List.Item>
        <List.Media>
          <Avatar size="lg">
            <Avatar.Fallback>LN</Avatar.Fallback>
          </Avatar>
        </List.Media>
        <List.Content>
          <List.Title>Little Nest Nursery</List.Title>
          <List.Description>Last paid 3 Oct</List.Description>
        </List.Content>
        <List.End>
          <Icon label="More info" name="info" size={20} />
        </List.End>
      </List.Item>
      <List.Item>
        <List.Media>
          <Avatar size="lg">
            <Avatar.Fallback>SC</Avatar.Fallback>
          </Avatar>
        </List.Media>
        <List.Content>
          <List.Title>Sunrise Holiday Club</List.Title>
          <List.Description>Last paid 21 Sep</List.Description>
        </List.Content>
        <List.End>
          <Icon label="More info" name="info" size={20} />
        </List.End>
      </List.Item>
    </List>
  </Card>
);

export const Interactive = () => (
  <Card style={{width: 390}}>
    <List>
      <List.Item href="#">
        <List.Media>
          <Icon name="credit-card" size={24} />
        </List.Media>
        <List.Content>
          <List.Title>Visa Debit</List.Title>
          <List.Description>•••• 4242</List.Description>
        </List.Content>
        <List.End>
          <Icon name="chevron-right" size={20} />
        </List.End>
      </List.Item>
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
    </List>
  </Card>
);
