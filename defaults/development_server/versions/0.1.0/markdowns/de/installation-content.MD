# Live demo

Changes are automatically rendered as you type.

* Follows the [CommonMark](http://commonmark.org/) spec
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!

## HTML block below

<blockquote>
    This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
```js
var React = require('react');
var Markdown = require('Areact-markdown');

React.render(
    <Markdown source="# Your markdown here" />,
    document.getElementById('content')
);
```

Pretty 'neat', <b>eh?</b> (c)




## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal