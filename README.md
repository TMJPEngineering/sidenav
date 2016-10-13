# Angular Directive SideNav
Responsive, Angular powered sidenav plugin.

Angular Sidenav uses CSS and native angular (no jqlite or jquery). It generates sidebar navigation and givesthe user the option to place the sidenav on the left, right or bottom side of the screen. 

### Sample Structure
```html
  <button class="btn btn-default" show-nav>SideNav</button>
  <side-nav side-nav-position="right-aligned">
      <h3>Sample</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  </side-nav>

```

The user has the option to change the position of the side navigation. By default, it is positioned on the left side of the screen. It can be changed using the `side-nav-position` attribute.

### Attributes

| Attribute | Description                       | Type      | Default     |Required|Values|
|-----------|-----------------------------------|-----------|-------------|--------|--------|
| `side-nav-position` | *takes the id of the target loader that will be loaded*       | `string` |`` empty string is equivalent to left aligned sidenav| `false` | `right-aligned`/ `bottom-aligned`|
| `show-nav`  | *triggers the display of the side nav*      | none  | none | `true` |
