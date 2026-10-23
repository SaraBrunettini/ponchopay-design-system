import type {Meta} from "@storybook/react";

import React from "react";

import {Alert} from "../../components/alert";
import {Button} from "../../components/button";
import {Checkbox} from "../../components/checkbox";
import {Description} from "../../components/description";
import {Input} from "../../components/input";
import {Label} from "../../components/label";
import {Radio} from "../../components/radio";
import {RadioGroup} from "../../components/radio-group";
import {SearchField} from "../../components/search-field";
import {TextField} from "../../components/textfield";

import {Field} from "./index";

export default {
  component: Field,
  parameters: {
    layout: "centered",
  },
  title: "Components/Forms/Field",
} as Meta<typeof Field>;

const Frame = ({children}: {children: React.ReactNode}) => (
  <div style={{width: 380}}>{children}</div>
);

export const Default = () => (
  <Frame>
    <Field.Group>
      <TextField name="child">
        <Label>Child&apos;s name</Label>
        <Input placeholder="e.g. Ava Smith" />
        <Description>As it appears on your booking.</Description>
      </TextField>
      <TextField name="reference">
        <Label>Payment reference</Label>
        <Input placeholder="LN-20431" />
      </TextField>
      <Field orientation="horizontal">
        <SearchField aria-label="Find a provider" name="provider">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Find a provider" />
          </SearchField.Group>
        </SearchField>
        <Button>Search</Button>
      </Field>
    </Field.Group>
  </Frame>
);

export const ChoiceCards = () => (
  <Frame>
    <RadioGroup aria-label="Pay from" defaultValue="tfc" name="pay-from">
      <Field.Group>
        <Field.Card>
          <Radio value="tfc">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Field.Content>
                <Field.Title>Tax-Free Childcare</Field.Title>
                <Description>Ava Smith &middot; 11000123456</Description>
              </Field.Content>
              <span>£25.00</span>
            </Radio.Content>
          </Radio>
        </Field.Card>
        <Field.Card>
          <Radio value="voucher">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Field.Content>
                <Field.Title>Childcare vouchers</Field.Title>
                <Description>Edenred, Computershare and more</Description>
              </Field.Content>
            </Radio.Content>
          </Radio>
        </Field.Card>
        <Field.Card>
          <Radio value="card">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Field.Content>
                <Field.Title>Debit or credit card</Field.Title>
              </Field.Content>
            </Radio.Content>
          </Radio>
        </Field.Card>
      </Field.Group>
    </RadioGroup>
  </Frame>
);

export const WithReveal = () => (
  <Frame>
    <Field.Group>
      <Field.Card>
        <Checkbox defaultSelected name="split">
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Field.Content>
              <Field.Title>Split with a second account</Field.Title>
              <Description>Pay part of this from another Tax-Free Childcare account.</Description>
            </Field.Content>
          </Checkbox.Content>
        </Checkbox>
        <Field.Reveal>
          <TextField name="split-ref">
            <Label>Childcare payment reference</Label>
            <Input placeholder="11000123456" />
          </TextField>
          <TextField name="split-amount">
            <Label>Amount</Label>
            <Input placeholder="£0.00" />
          </TextField>
          <Button size="sm" variant="ghost">
            + Add another account
          </Button>
        </Field.Reveal>
      </Field.Card>
      <Field.Card>
        <Checkbox name="gift">
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Field.Content>
              <Field.Title>Add a note for the provider</Field.Title>
            </Field.Content>
          </Checkbox.Content>
        </Checkbox>
        <Field.Reveal>
          <TextField name="note">
            <Label>Note</Label>
            <Input placeholder="e.g. Ava's October sessions" />
          </TextField>
        </Field.Reveal>
      </Field.Card>
    </Field.Group>
  </Frame>
);

export const WithAlert = () => (
  <Frame>
    <RadioGroup aria-label="Pay from" defaultValue="tfc-2" name="pay-from-alert">
      <Field.Group>
        <Field.Card>
          <Radio value="tfc-1">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Field.Content>
                <Field.Title>Tax-Free Childcare &middot; Ava</Field.Title>
                <Description>11000123456</Description>
              </Field.Content>
            </Radio.Content>
          </Radio>
          <Alert status="warning">
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>Reconfirm by 30 Nov</Alert.Title>
              <Alert.Description>
                Payments stop if this account isn&apos;t reconfirmed.
              </Alert.Description>
            </Alert.Content>
          </Alert>
        </Field.Card>
        <Field.Card>
          <Radio value="tfc-2">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Field.Content>
                <Field.Title>Tax-Free Childcare &middot; Leo</Field.Title>
                <Description>11000654321</Description>
              </Field.Content>
            </Radio.Content>
          </Radio>
        </Field.Card>
      </Field.Group>
    </RadioGroup>
  </Frame>
);
