# Fileinput library
A quick and handy way to make a beautiful HTML/CSS/JS `<input type="file">` tag 

## Usage
Import both .css and .js files to your HTML doc and call `createFileinput()` function giving it an jquery element

You have to follow the DOM structure like this:
```html
<form>
  ...
  <div>
    <input type="file">
  </div>
  ...
</form>
```

You can set width and height of the new element by setting those values to original `<input type="file">` tag 

## Demo
In `example/` you can find a working demo with PHP set up
