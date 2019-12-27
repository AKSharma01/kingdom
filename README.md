# KINGDOM

[![N|KingDom](https://www.48hourslogo.com/48hourslogo_data/2018/04/15/72074_1523734206.png)](https://github.com/AKSharma01/kingdom)

[![Nodejs version](https://img.shields.io/badge/nodejs-10.16.3-blue.svg)](https://nodejs.org/en/blog/release/v10.16.3/) [![NPM](https://img.shields.io/badge/npm-6.11.3-skyblue.svg)](https://www.npmjs.com/package/npm/v/6.11.3) [![yarn](https://img.shields.io/badge/yarn-1.19.2-%23ff3300.svg)](https://github.com/yarnpkg/yarn#readme) [![Postgres](https://img.shields.io/badge/postgres-11.5-green.svg)](https://www.npmjs.com/package/mongoose/v/5.7.14)  [![Nodemon](https://img.shields.io/badge/nodemon-2.0.1-%23990099.svg)](https://www.npmjs.com/package/nodemon/v/2.0.1) [![node-postgres](https://img.shields.io/badge/pg-7.15.1-green.svg)](https://github.com/brianc/node-postgres) [![express](https://img.shields.io/badge/express-4.17.1-green.svg)](http://expressjs.com/) [![sequelize](https://img.shields.io/badge/sequelize-5.21.2-%2390099.svg)](https://sequelize.org/v5/) [![sequelize-cli](https://img.shields.io/badge/sequelize_cli-5.5.1-orange.svg)](https://github.com/sequelize/cli)

Selltm Payment Backend project to track payment & bonus for the reseller (Web/android).


__Table of content__
    
- [Install](#install)
- [Configure and Run](#configure-and-run)
- [Authors](#authors)
- [Contributions](#contributions)


# Install
> Pre-requirement
**node.js**, **yarn**, **postgres**

#### Install The Node.Js And NMP Packages On Ubuntu 16.04 / 18.04 LTS
```sh
 >>> brew install node
 >>> nodejs -v
 v10.16.3
```
#### Install NPM and Nodemon
```sh
 >>> npm install -g npm@6.11.3 nodemon@2.0.1 yarn@1.19.2
 >>> npm -v
 6.11.3
 >>> nodemon -v
 2.0.1
```

#### Install latest version of [Postgres](http://www.postgresqltutorial.com/)
```sh
 >>> brew install postgresql
 >>> postgres --version
 postgres (PostgreSQL) 11.5
```

## Configure and Run
```sh
 >>> sudo git clone https://github.com/AKSharma01/kingdom.git
 >>> cd kingdom
 >>> yarn install (to install project dependencies)
 >>> sequelize-cli db:migrate (to migrate all db related change)
 >>> sequelize db:seed:all
 >>> nodemon .
server is running!!!!
```

## Postman
```
 >>> set postman env 
 domain : http://localhost:3000
 >>> import link 
 https://www.getpostman.com/collections/f51e1f6cdb7006c942e6
```


# Authors
- Akash Kumar Sharma ([github.com/AKSharma01](https://github.com/AKSharma01))
