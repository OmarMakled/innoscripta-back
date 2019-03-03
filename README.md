![screen shot 2019-03-03 at 1 29 56 pm](https://user-images.githubusercontent.com/3720473/53694718-84574000-3dbb-11e9-8b30-6a3b29d45832.png)

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

