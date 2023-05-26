## Usage

```js
import jsXOR from 'js-xor';
```

```js
var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
var salt = "This is salt!";

var encrypted = jsXOR.exec(str, salt);
var decrypted = jsXOR.exec(encrypted, salt);
```