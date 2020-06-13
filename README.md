# UserMethods package

## setup:
$ npm install usermethods --save

then...
```
const { UserMethods } = require('UserMethods')
```

# Documentation

## sending an email:
```
UserMethods.sendEmail('service (gmail)', 'emailFrom', 'emailFromPassword', ['firstRecipient', 'secondRecipient'], 'subject', 'type of content (html / text)', 'route to email content file');
```

