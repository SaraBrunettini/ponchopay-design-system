# HeroUI v3 (@heroui/react) - how to build with it

All components are on `window.HeroUI` (e.g. `const { Button, Card, TextField, Label, Input } = window.HeroUI;`). They are React Aria based and fully interactive.

## Setup
- **No provider is required.** Components style themselves from `styles.css` (tokens + component CSS + Inter font). Only wrap in `I18nProvider` (locale) or `RouterProvider` (client-side links) when you need them.
- **Page background:** the app surface is `bg-background text-foreground`. Put it on your root element. Cards, surfaces and white fields are designed to sit on that light-gray background; on pure white they lose contrast.
- **Dark mode:** add `class="dark"` (or `data-theme="dark"`) to `<html>` or any ancestor. Every token flips; never hard-code colors.

## Composition
Components are compound - use the dot sub-components, not ad-hoc markup:
- `Card` -> `Card.Header` > `Card.Title` + `Card.Description`, `Card.Content`, `Card.Footer`. `variant`: `default | secondary | tertiary | transparent`.
- Fields: `<TextField name="email" type="email"><Label>Email</Label><Input placeholder="..." /><Description>Help</Description><FieldError /></TextField>`. Other fields wrap `Label`/`Description`/`FieldError` the same way but have their own control parts - e.g. `NumberField.Group` > `NumberField.DecrementButton` + `NumberField.Input` + `NumberField.IncrementButton`; `SearchField.Group` > `SearchField.SearchIcon` + `SearchField.Input` + `SearchField.ClearButton`; `Select.Trigger` > `Select.Value` + `Select.Indicator`, then `Select.Popover`. Check `.prompt.md` before composing one.
- `Button` `variant`: `primary | secondary | tertiary | outline | ghost | danger | danger-soft`; `size`: `sm | md | lg`.
- `Surface` (`variant` like Card) is the plain container for grouping content.
- Overlays (`Modal`, `AlertDialog`, `Drawer`, `Popover`, `Tooltip`, `Dropdown`) take a trigger plus content - read each component's `.prompt.md` for its exact anatomy.
- Icons: the bundle ships a few (`IconSearch`, `IconPlus`, `IconMinus`, `IconChevronDown/Up/Left/Right`, `IconCalendar`, `InfoIcon`, `SuccessIcon`, `DangerIcon`, `CloseIcon`, `ExternalLinkIcon`). For anything else use inline SVG sized `size-4`/`size-5` with `currentColor`.

## Styling your own layout
Tailwind v4 utility classes **that exist in the shipped stylesheet** - it is a compiled subset, not all of Tailwind:
- Color tokens: `bg-background`, `bg-surface`, `bg-surface-secondary`, `bg-surface-tertiary`, `bg-default`, `bg-accent`, `bg-accent-soft`, `text-foreground`, `text-muted`, `text-accent`, `text-danger`, `text-success`, `text-warning`, `border-border`, `border-separator`.
- Layout: `flex flex-col items-center items-start justify-between justify-center flex-1 shrink-0 grid grid-cols-1 grid-cols-3 grid-cols-4 gap-1..gap-8`, `w-full max-w-sm max-w-md max-w-lg mx-auto h-screen`.
- Spacing: `p-2 p-3 p-4 p-6 p-8 px-4 py-2 py-4 py-8 mt-2 mt-4 mb-2 mb-4 space-y-2 space-y-3 space-y-4`.
- Type: `text-xs text-sm text-base text-lg text-xl text-2xl text-3xl font-medium font-semibold font-bold tracking-tight text-center`; radii `rounded-lg rounded-xl rounded-2xl rounded-3xl rounded-full`; `shadow-surface`.

If a class you want is not listed (e.g. `grid-cols-2`, responsive `md:` variants, `px-6`), it may not resolve - use an inline `style` with the theme variables instead: `style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'calc(var(--spacing) * 4)', background: 'var(--surface)', borderRadius: 'var(--radius)' }}`. Tokens: `--background --foreground --surface --surface-secondary --surface-tertiary --muted --accent --accent-foreground --accent-soft --danger --success --warning --default --border --separator --radius --spacing --field-background`.

Source of truth: `styles.css` and its import `_ds_bundle.css`; per-component API in `components/<group>/<Name>/<Name>.d.ts` and usage in `<Name>.prompt.md`.

## Example
```jsx
const { Card, Form, TextField, Label, Input, Button, Link } = window.HeroUI;
<div className="bg-background text-foreground flex h-screen items-center justify-center p-8">
  <Card className="w-full max-w-md">
    <Card.Header>
      <Card.Title>Login</Card.Title>
      <Card.Description>Enter your credentials to access your account</Card.Description>
    </Card.Header>
    <Form>
      <Card.Content>
        <div className="flex flex-col gap-4">
          <TextField name="email" type="email"><Label>Email</Label><Input placeholder="email@example.com" variant="secondary" /></TextField>
          <TextField name="password" type="password"><Label>Password</Label><Input placeholder="••••••••" variant="secondary" /></TextField>
        </div>
      </Card.Content>
      <Card.Footer className="mt-4 flex flex-col gap-2">
        <Button className="w-full" type="submit">Sign In</Button>
        <Link className="text-center text-sm" href="#">Forgot password?</Link>
      </Card.Footer>
    </Form>
  </Card>
</div>
```
