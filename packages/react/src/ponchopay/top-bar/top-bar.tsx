"use client";

import type {ComponentPropsWithRef} from "react";

import {topBarVariants} from "@heroui/styles";
import React, {createContext, useContext} from "react";

/* -------------------------------------------------------------------------------------------------
 * TopBar Context
 * -----------------------------------------------------------------------------------------------*/
type TopBarContext = {
  slots?: ReturnType<typeof topBarVariants>;
};

const TopBarContext = createContext<TopBarContext>({});

/* -------------------------------------------------------------------------------------------------
 * TopBar Root
 * -----------------------------------------------------------------------------------------------*/
interface TopBarRootProps extends ComponentPropsWithRef<"div"> {}

const TopBarRoot = ({children, className, ...props}: TopBarRootProps) => {
  const slots = React.useMemo(() => topBarVariants(), []);

  return (
    <TopBarContext.Provider value={{slots}}>
      <div className={slots.base({className})} data-slot="top-bar" {...props}>
        {children}
      </div>
    </TopBarContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * TopBar Start
 * -----------------------------------------------------------------------------------------------*/
interface TopBarStartProps extends ComponentPropsWithRef<"div"> {}

const TopBarStart = ({className, ...props}: TopBarStartProps) => {
  const {slots} = useContext(TopBarContext);

  return <div className={slots?.start({className})} data-slot="top-bar-start" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * TopBar Title
 * -----------------------------------------------------------------------------------------------*/
interface TopBarTitleProps extends ComponentPropsWithRef<"h1"> {}

const TopBarTitle = ({children, className, ...props}: TopBarTitleProps) => {
  const {slots} = useContext(TopBarContext);

  return (
    <h1 className={slots?.title({className})} data-slot="top-bar-title" {...props}>
      {children}
    </h1>
  );
};

/* -------------------------------------------------------------------------------------------------
 * TopBar Content (stretches across the middle, e.g. a search field)
 * -----------------------------------------------------------------------------------------------*/
interface TopBarContentProps extends ComponentPropsWithRef<"div"> {}

const TopBarContent = ({className, ...props}: TopBarContentProps) => {
  const {slots} = useContext(TopBarContext);

  return <div className={slots?.content({className})} data-slot="top-bar-content" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * TopBar End
 * -----------------------------------------------------------------------------------------------*/
interface TopBarEndProps extends ComponentPropsWithRef<"div"> {}

const TopBarEnd = ({className, ...props}: TopBarEndProps) => {
  const {slots} = useContext(TopBarContext);

  return <div className={slots?.end({className})} data-slot="top-bar-end" {...props} />;
};

TopBarRoot.displayName = "HeroUI.TopBar";
TopBarStart.displayName = "HeroUI.TopBar.Start";
TopBarTitle.displayName = "HeroUI.TopBar.Title";
TopBarContent.displayName = "HeroUI.TopBar.Content";
TopBarEnd.displayName = "HeroUI.TopBar.End";

export {TopBarRoot, TopBarStart, TopBarTitle, TopBarContent, TopBarEnd};
export type {
  TopBarRootProps,
  TopBarStartProps,
  TopBarTitleProps,
  TopBarContentProps,
  TopBarEndProps,
};
