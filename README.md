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

The user can also change the trigger of the side navigation. In the sample structure, I didn't specified the `show-event` attribute so by default, it will be triggered by a click. For some cases that the user wants to use a combo box (or something else), it can be changed by specifying the event that will be used.

```html
<select class="form-control" show-nav show-event="change">
  <option>show sideNav</option>
  <option>show sidenav</option>
</select>
```

### Attributes

| Attribute | Description                       | Type      | Default     |Required|Values|
|-----------|-----------------------------------|-----------|-------------|--------|--------|
| `side-nav-position` | *takes the id of the target loader that will be loaded*       | `string` |`` empty string is equivalent to left aligned sidenav| `false` | `right-aligned`/ `bottom-aligned`|
| `show-nav`  | *triggers the display of the side nav*      | none  | none | `true` |
| `show-event`  | *gives the user the option to change the trigger of the `show-nav` attribute*      | string  | `click` | `false` | `change` |
