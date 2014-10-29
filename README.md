# afterparty.js

Load images of your webpage only after the page is loaded. It's easy to use:
* source afterparty.js and
* use the "after-src" \<img\> attribute instead of the "src".


# install

It's recommended to use [Bower](http://bower.io/) for every web developer.
If you also do, you can easily install afterparty.js with the following:

```bash
$ bower install afterparty.js
```


# example.html

```html
<html>
<head>
    <title>Hi, afterparty!</title>
</head>
<body>
    <center>
        <a href="https://yoms.org/">
            <img after-src="yoms.png" alt="" width="162" height="162" style="padding-top: 100px;">
        </a>
    </center>
    <script src="https://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
    <script src="afterparty.js" type="text/javascript"></script>
</body>
</html>
```
