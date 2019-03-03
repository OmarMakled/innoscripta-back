## Front

![screen shot 2019-03-03 at 2 24 41 pm](https://user-images.githubusercontent.com/3720473/53695112-2e38cb80-3dc0-11e9-9358-7d5aa8ebd4f3.png)

![mar-03-2019 13-35-04](https://user-images.githubusercontent.com/3720473/53694554-3c371e00-3db9-11e9-867b-5bf3d4420822.gif)



## Project setup & running

```
git clone git@github.com:OmarMakled/innoscripta-back.git
cd innoscripta-back
composer install


php bin/console doctrine:database:create
php bin/console doctrine:schema:update --force
php bin/console doctrine:fixtures:load

php bin/console server:start
```

## Testing

```
vendor/bin/simple-phpunit
```

[front-end](https://github.com/OmarMakled/innoscripta-front/)

Happy Coding ♥ !

