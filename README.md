This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Component documentation

To run storybook:

```bash
yarn storybook
```

Your browser should open page at `http://localhost:6006`

Write components documentation by creating `MyComponent.stories.tsx` file in the `components` folder

Here's an example:

```tsx
import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, IButtonProps } from "@components/Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    color: "primary",
  },
} as Meta<IButtonProps>;

const Template: Story<IButtonProps> = args => <Button {...args} />;

export const Example = Template.bind({});
```

## Configuration

### Absolute imports

Import from `components`, `pages` and `hooks` folders by using:

```js
import Button from "@components/Button";
import Home from "@pages/index";
import useTest from "@hooks/useTest";
```

### Styles

This project uses `twin.macro` for styling using `Tailwind CSS` and `emotion` for custom CSS-in-JS styling

To use Tailwind classes in component simply import `twin.macro`:

```tsx
import "twin.macro";
```

and use the `tw` prop inside component

```tsx
<p tw="flex text-gray-500">Some text</p>
```

To write custom styles using SCSS-like syntax use Emotion.

More info in the [**twin.macro docs**](https://github.com/ben-rogerson/twin.macro)

## TODO List

When starting new project:

- [ ] Replace base colors in tailwind.config.js
- [ ] Generate favicons and put them into `src/_app.tsx`
