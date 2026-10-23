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
- Icons: always `<Icon name="…" />` with a kebab-case Lucide name (all Lucide icons are bundled), e.g. `<Button><Icon name="mail" /> Login with Email</Button>`. 16px by default (`size={20}` etc.), coloured by `currentColor`, decorative unless you pass `label`. Loading: `<Icon name="loader-circle" spin label="Loading" />`. Payment marks: `brand-apple`, `brand-google`, `brand-klarna`; payment methods use `piggy-bank` (Tax-Free Childcare), `ticket` (vouchers), `credit-card`, `landmark` (Pay by Bank). Never paste raw SVG icons.
- Logo: always `<Logo />` (PonchoPay full logo, 24px high, white wordmark automatically inside `.dark`). `<Logo variant="symbol" />` for the mark only (favicon, avatar, collapsed sidebar). `<Logo theme="dark" />` forces the white wordmark on a dark panel inside a light page. Set size with `height`; never use an `<img>`, recolour or stretch it.
- Brand colours: the logo uses mint `#00CCA7`; interactive UI uses the teal accent (`bg-accent`, `#0F766E`). They are intentionally different — never use the logo mint for buttons or text.

## App screens (PonchoPay layout)
Build every screen from these parts instead of hand-made headers, rows or footers - see `Page` stories (Home, Amount, Review, Success) for complete screens:
- `Page` is the screen: `Page.Header` (sticky top), `Page.Content` (padded column, `gap-4`), `Page.Footer` (sticky bottom). `variant="surface"` for white flow screens; default is the light-grey app background.
- Top of screen: `PageHeader` for main tabs (`PageHeader.Toolbar` with round `<Button isIconOnly>` icons + `PageHeader.Actions` on the right, then a big `PageHeader.Title`); `TopBar` inside flows (`TopBar.Start` back button, centred `TopBar.Title`, `TopBar.End` close; `TopBar.Content` instead of Title for a search field).
- `BottomNav` with `BottomNav.Item` (`<Icon size={24} />` + label, `isCurrent` on the active tab) and an optional raised `BottomNav.Action` in the middle.
- Rows: `List` > `List.Heading`, `List.Item` > `List.Media` (Avatar or Icon) + `List.Content` (`List.Title`, `List.Description`) + `List.End` (info icon or `chevron-right`). Give `List.Item` an `href` or `onPress` to make the whole row tappable. Group rows in a `Card`.
- Money breakdowns: `SummaryList` > `SummaryList.Row` (`isTotal` on the last) > `SummaryList.Label` + `SummaryList.Value`.
- Bottom buttons: `ActionBar` inside `Page.Footer`; buttons share the width (`orientation="vertical"` to stack).
- Outcomes: `Result status="success|danger|warning|info"` > `Result.Icon` (default icon per status), `Result.Title`, `Result.Description`, `Result.Actions`.
- Bottom sheets (confirm, choose an option, review): `Drawer` with `placement="bottom"`, with a `TopBar` inside.

## Forms (PonchoPay field layout)
- Stack fields in `Field.Group` (24px apart; 12px automatically when it holds choice cards). Text inputs stay `TextField` > `Label` + `Input` + `Description`.
- `Field` for any other label + control layout; `orientation="horizontal"` for a row (e.g. search + button). `isInvalid` / `isDisabled` style the label - also set them on the control.
- Choice cards (TFC accounts, vouchers, split payments): `Field.Card` around a `Radio` (inside a `RadioGroup`) or a `Checkbox`. Put `Radio.Control` + `Field.Content` (`Field.Title` + `Description`) inside `Radio.Content` so the whole card is the hit area; an amount goes as plain text after `Field.Content`. The selected card gets a neutral fill and the teal control is the only colour - never recolour the card.
- `Field.Reveal` after the Radio/Checkbox inside a `Field.Card` holds extra inputs, radio lists or a `Button variant="ghost"` link; it shows only while that card is selected. Never put inputs inside the Radio/Checkbox itself.
- Status on a card: `<Alert status="warning">` inside the `Field.Card`, after the Radio/Checkbox - visible whether or not it's selected. Never a tooltip.
- Errors outside a `TextField` (a RadioGroup, a group of cards, a Select): wrap in `<FormItem error="…">` with a `Label` first; the label turns red and the message is announced. Inside a `TextField` keep using `FieldError`.

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
