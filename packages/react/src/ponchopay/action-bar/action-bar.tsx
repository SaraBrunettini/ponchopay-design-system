"use client";

import type {ActionBarVariants} from "@heroui/styles";
import type {ComponentPropsWithRef} from "react";

import {actionBarVariants} from "@heroui/styles";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * ActionBar Root
 * -----------------------------------------------------------------------------------------------*/
interface ActionBarRootProps extends ComponentPropsWithRef<"div">, ActionBarVariants {}

const ActionBarRoot = ({className, orientation, ...props}: ActionBarRootProps) => {
  return (
    <div
      className={actionBarVariants({className, orientation})}
      data-orientation={orientation ?? "horizontal"}
      data-slot="action-bar"
      {...props}
    />
  );
};

ActionBarRoot.displayName = "HeroUI.ActionBar";

export {ActionBarRoot};
export type {ActionBarRootProps};
