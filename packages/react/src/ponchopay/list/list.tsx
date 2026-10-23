"use client";

import type {ComponentPropsWithRef} from "react";

import {listVariants} from "@heroui/styles";
import React, {createContext, useContext} from "react";
import {Link as LinkPrimitive} from "react-aria-components";

import {composeTwRenderProps} from "../../utils/compose";

/* -------------------------------------------------------------------------------------------------
 * List Context
 * -----------------------------------------------------------------------------------------------*/
type ListContext = {
  slots?: ReturnType<typeof listVariants>;
};

const ListContext = createContext<ListContext>({});

/* -------------------------------------------------------------------------------------------------
 * List Root
 * -----------------------------------------------------------------------------------------------*/
interface ListRootProps extends ComponentPropsWithRef<"div"> {}

const ListRoot = ({children, className, ...props}: ListRootProps) => {
  const slots = React.useMemo(() => listVariants(), []);

  return (
    <ListContext.Provider value={{slots}}>
      <div className={slots.base({className})} data-slot="list" {...props}>
        {children}
      </div>
    </ListContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * List Heading
 * -----------------------------------------------------------------------------------------------*/
interface ListHeadingProps extends ComponentPropsWithRef<"h2"> {}

const ListHeading = ({children, className, ...props}: ListHeadingProps) => {
  const {slots} = useContext(ListContext);

  return (
    <h2 className={slots?.heading({className})} data-slot="list-heading" {...props}>
      {children}
    </h2>
  );
};

/* -------------------------------------------------------------------------------------------------
 * List Item (a link when given `href` or `onPress`, otherwise a plain row)
 * -----------------------------------------------------------------------------------------------*/
type ListItemProps =
  | (ComponentPropsWithRef<"div"> & {href?: undefined; onPress?: undefined})
  | React.ComponentProps<typeof LinkPrimitive>;

const ListItem = (props: ListItemProps) => {
  const {slots} = useContext(ListContext);

  if (props.href !== undefined || props.onPress !== undefined) {
    const {className, ...rest} = props as React.ComponentProps<typeof LinkPrimitive>;

    return (
      <LinkPrimitive
        className={composeTwRenderProps(className, slots?.item({isInteractive: true}))}
        data-slot="list-item"
        {...rest}
      />
    );
  }

  const {className, ...rest} = props as ComponentPropsWithRef<"div">;

  return <div className={slots?.item({className})} data-slot="list-item" {...rest} />;
};

/* -------------------------------------------------------------------------------------------------
 * List Media
 * -----------------------------------------------------------------------------------------------*/
interface ListMediaProps extends ComponentPropsWithRef<"div"> {}

const ListMedia = ({className, ...props}: ListMediaProps) => {
  const {slots} = useContext(ListContext);

  return <div className={slots?.media({className})} data-slot="list-media" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * List Content
 * -----------------------------------------------------------------------------------------------*/
interface ListContentProps extends ComponentPropsWithRef<"div"> {}

const ListContent = ({className, ...props}: ListContentProps) => {
  const {slots} = useContext(ListContext);

  return <div className={slots?.content({className})} data-slot="list-content" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * List Title
 * -----------------------------------------------------------------------------------------------*/
interface ListTitleProps extends ComponentPropsWithRef<"span"> {}

const ListTitle = ({className, ...props}: ListTitleProps) => {
  const {slots} = useContext(ListContext);

  return <span className={slots?.title({className})} data-slot="list-title" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * List Description
 * -----------------------------------------------------------------------------------------------*/
interface ListDescriptionProps extends ComponentPropsWithRef<"span"> {}

const ListDescription = ({className, ...props}: ListDescriptionProps) => {
  const {slots} = useContext(ListContext);

  return (
    <span className={slots?.description({className})} data-slot="list-description" {...props} />
  );
};

/* -------------------------------------------------------------------------------------------------
 * List End
 * -----------------------------------------------------------------------------------------------*/
interface ListEndProps extends ComponentPropsWithRef<"div"> {}

const ListEnd = ({className, ...props}: ListEndProps) => {
  const {slots} = useContext(ListContext);

  return <div className={slots?.end({className})} data-slot="list-end" {...props} />;
};

ListRoot.displayName = "HeroUI.List";
ListHeading.displayName = "HeroUI.List.Heading";
ListItem.displayName = "HeroUI.List.Item";
ListMedia.displayName = "HeroUI.List.Media";
ListContent.displayName = "HeroUI.List.Content";
ListTitle.displayName = "HeroUI.List.Title";
ListDescription.displayName = "HeroUI.List.Description";
ListEnd.displayName = "HeroUI.List.End";

export {
  ListRoot,
  ListHeading,
  ListItem,
  ListMedia,
  ListContent,
  ListTitle,
  ListDescription,
  ListEnd,
};
export type {
  ListRootProps,
  ListHeadingProps,
  ListItemProps,
  ListMediaProps,
  ListContentProps,
  ListTitleProps,
  ListDescriptionProps,
  ListEndProps,
};
