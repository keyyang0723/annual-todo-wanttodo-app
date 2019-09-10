import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {SimpleButton, interfaceProps}from "../button";

storiesOf("Button", module).add("with text", () => (
  <SimpleButton onClick={action("clicked")} main={""}>Hello Button</SimpleButton>
));
