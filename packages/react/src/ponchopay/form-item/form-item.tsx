"use client";

import type {ComponentPropsWithRef, ReactNode} from "react";

import {formItemVariants} from "@heroui/styles";
import React, {createContext, useContext, useId} from "react";

import {dataAttr} from "../../utils/assertion";

/* -------------------------------------------------------------------------------------------------
 * FormItem Context
 * -----------------------------------------------------------------------------------------------*/
type FormItemContext = {
  messageId?: string;
  slots?: ReturnType<typeof formItemVariants>;
};

const FormItemContext = createContext<FormItemContext>({});

/* -------------------------------------------------------------------------------------------------
 * FormItem Root
 * -----------------------------------------------------------------------------------------------*/
interface FormItemRootProps extends ComponentPropsWithRef<"div"> {
  /** Error message. Turns the item's label red and is announced to screen readers. */
  error?: ReactNode;
}

const FormItemRoot = ({children, className, error, ...props}: FormItemRootProps) => {
  const slots = React.useMemo(() => formItemVariants(), []);
  const messageId = useId();
  const hasError = error !== undefined && error !== null && error !== false && error !== "";

  return (
    <FormItemContext.Provider value={{messageId, slots}}>
      <div
        className={slots.base({className})}
        data-error={dataAttr(hasError)}
        data-slot="form-item"
        {...props}
      >
        {children}
        {hasError ? <FormItemMessage>{error}</FormItemMessage> : null}
      </div>
    </FormItemContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * FormItem Message
 * -----------------------------------------------------------------------------------------------*/
interface FormItemMessageProps extends ComponentPropsWithRef<"p"> {}

const FormItemMessage = ({className, id, ...props}: FormItemMessageProps) => {
  const {messageId, slots} = useContext(FormItemContext);

  return (
    <p
      className={(slots ?? formItemVariants()).message({className})}
      data-slot="form-item-message"
      id={id ?? messageId}
      role="alert"
      {...props}
    />
  );
};

FormItemRoot.displayName = "HeroUI.FormItem";
FormItemMessage.displayName = "HeroUI.FormItem.Message";

export {FormItemRoot, FormItemMessage};
export type {FormItemRootProps, FormItemMessageProps};
