# formValidationJs
Javascript function to automate form validation

## ⚙️ Usage
download [formValidate.js](docs/formValidate.js) in your project and import `formValidate()` function from it passing a NodeList with all your forms


**Exemple**
```JS
import formValidate from './formValidation.js';

formValidate(document.querySelectorAll('.formValidationJs'));
```

## 🖥️ Preview
you can see a usage exemple in https://eusouomichel.github.io/formValidationJs
it imports a mock [validate.js](https://github.com/lucasliet/formValidationJs/blob/a3f76f0b3a62f4c14d4ab9b1211dc667e47915cf/docs/index.html#L99) file as `type=module` using `formValidate()` function
