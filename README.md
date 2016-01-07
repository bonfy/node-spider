# node-spider
spider using nodejs step by step

## Install packages
```cmd
$ npm install request --save
$ npm install cheerio --save
```

## Usage:
Download this repo
```cmd
git clone https://github.com/bonfy/node-spider.git
cd node-spider
npm install
node v1
```


## intro for versions:
* v1: connect to the web (with proxy)
* v2: add cheerio to parse html 
* v3: use request-promise

## 各版本说明：
* v1: 使用request连接url获取网页正文
* v2: 使用cheerio处理网页 得到内容
* v3: 使用request-promise Promise风格 