"use client";

import type {ComponentPropsWithRef} from "react";

import {bottomNavVariants} from "@heroui/styles";
import React, {createContext, useContext} from "react";
import {Link as LinkPrimitive} from "react-aria-components";

import {composeTwRenderProps} from "../../utils/compose";

/* -------------------------------------------------------------------------------------------------
 * BottomNav Context
 * -----------------------------------------------------------------------------------------------*/
type BottomNavContext = {
  slots?: ReturnType<typeof bottomNavVariants>;
};

const BottomNavContext = createContext<BottomNavContext>({});

/* -------------------------------------------------------------------------------------------------
 * BottomNav Root
 * -----------------------------------------------------------------------------------------------*/
interface BottomNavRootProps extends ComponentPropsWithRef<"nav"> {}

const BottomNavRoot = ({
  "aria-label": ariaLabel = "Main",
  children,
  className,
  ...props
}: BottomNavRootProps) => {
  const slots = React.useMemo(() => bottomNavVariants(), []);

  return (
    <BottomNavContext.Provider value={{slots}}>
      <nav
        aria-label={ariaLabel}
        className={slots.base({className})}
        data-slot="bottom-nav"
        {...props}
      >
        {children}
      </nav>
    </BottomNavContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * BottomNav Item
 * -----------------------------------------------------------------------------------------------*/
interface BottomNavItemProps extends Omit<
  React.ComponentProps<typeof LinkPrimitive>,
  "aria-current"
> {
  /** Marks the tab for the current screen. */
  isCurrent?: boolean;
}

const BottomNavItem = ({className, isCurrent, ...props}: BottomNavItemProps) => {
  const {slots} = useContext(BottomNavContext);

  return (
    <LinkPrimitive
      aria-current={isCurrent ? "page" : undefined}
      className={composeTwRenderProps(className, slots?.item())}
      data-slot="bottom-nav-item"
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * BottomNav Action (raised centre tab; its first Icon becomes a filled circle)
 * -----------------------------------------------------------------------------------------------*/
interface BottomNavActionProps extends BottomNavItemProps {}

const BottomNavAction = ({className, isCurrent, ...props}: BottomNavActionProps) => {
  const {slots} = useContext(BottomNavContext);

  return (
    <LinkPrimitive
      aria-current={isCurrent ? "page" : undefined}
      className={composeTwRenderProps(className, slots?.action())}
      data-slot="bottom-nav-action"
      {...props}
    />
  );
};

BottomNavRoot.displayName = "HeroUI.BottomNav";
BottomNavItem.displayName = "HeroUI.BottomNav.Item";
BottomNavAction.displayName = "HeroUI.BottomNav.Action";

export {BottomNavRoot, BottomNavItem, BottomNavAction};
export type {BottomNavRootProps, BottomNavItemProps, BottomNavActionProps};
