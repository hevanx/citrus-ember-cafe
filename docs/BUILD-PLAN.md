# Build Plan: Dark Mode Toggle

## Feature Description
Add a dark mode toggle to the Citrus & Ember Cafe website that allows users to switch between light and dark themes. The toggle should persist the user's preference across page loads and respect the operating system's color scheme preference.

## Implementation Steps

### Step 1: Add a Dark Mode toggle UI control to the header
- Add a button with a moon icon (SVG) to the site header, next to the nav links
- Add the button to all four pages (index, about, menu, contact)
- Style the button to match the site's existing warm color palette
- **Test:** Open each page and verify the moon icon button is visible in the header, is clickable, and looks consistent with the rest of the nav

### Step 2: Define dark mode CSS custom property overrides
- Create a `[data-theme="dark"]` selector block in `styles.css`
- Override all color variables (`--color-primary`, `--color-text`, `--color-white`, `--color-light`, etc.) with dark-appropriate values
- Override shadow variables for darker backgrounds
- **Test:** Manually add `data-theme="dark"` to the `<html>` tag in DevTools and verify the page colors change to a dark palette

### Step 3: Add dark mode overrides for components with hardcoded styles
- Override gradients on `.page-header` and `.cta-section`
- Override `.cta-section .btn-primary` colors (which were inverted for light mode)
- Override form input hover/focus borders and shadows
- Override `.form-success`, `.quick-info`, `.site-footer`, and `.copyright` styles
- Slightly reduce image opacity for comfort on dark backgrounds
- **Test:** With `data-theme="dark"` still set in DevTools, navigate to each page and check that all sections look correct (no white boxes, unreadable text, or broken gradients)

### Step 4: Wire up the toggle button click handler
- In `script.js`, add a click event listener on the toggle button
- On click, toggle `data-theme="dark"` on the `<html>` element
- Save the user's choice (`"dark"` or `"light"`) to `localStorage`
- **Test:** Click the toggle button and verify the page switches between light and dark themes. Open the browser console and confirm `localStorage.getItem('theme')` updates correctly

### Step 5: Add icon swap between moon and sun
- Include a hidden sun SVG icon inside the toggle button
- Add CSS rules so that in dark mode the moon icon hides and the sun icon shows
- **Test:** Click the toggle and verify the icon changes from moon (light mode) to sun (dark mode) and back

### Step 6: Persist theme across page loads with flash prevention
- Add an inline `<script>` in the `<head>` of each HTML page that reads `localStorage` and sets `data-theme="dark"` before the page renders
- If no saved preference exists, respect `prefers-color-scheme: dark` from the OS
- **Test:** Set dark mode, refresh the page — it should load directly in dark mode with no flash of light theme. Navigate between pages and confirm dark mode stays active

### Step 7: Add smooth transition on theme switch
- Add a `transition` on `body` for `background-color` and `color` so the theme switch isn't jarring
- **Test:** Click the toggle and verify the background and text colors animate smoothly (~300ms) instead of snapping instantly

## Files Modified
- `index.html` — inline theme script + toggle button in header
- `about.html` — inline theme script + toggle button in header
- `menu.html` — inline theme script + toggle button in header
- `contact.html` — inline theme script + toggle button in header
- `styles.css` — dark mode variable overrides, component overrides, toggle button styles, body transition
- `script.js` — toggle click handler with localStorage persistence
