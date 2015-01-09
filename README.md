###semantic-ui-growl - Meteor Smart Package

This is modified jQuery plugin [bootstrap growl jquery plugin](https://github.com/ifightcrime/bootstrap-growl) to be used with Semntic UI.

Extra option is:
    * header: String - which renders the header of the growl message

###How to use?

1. Install with `meteor add tomi:semantic-ui-growl`

Example use:

```javascript
$.semanticUiGrowl('My message', {
    header: 'My Header'
  });
```

#### Default Options

```javascript
$.semanticUiGrowl.defaultOptions = {
  ele: 'body',
  type: 'info',
  offset: {
    from: 'top',
    amount: 20
  },
  align: 'right',
  width: 250,
  delay: 4000,
  allow_dismiss: true,
  stackup_spacing: 10
};
```
