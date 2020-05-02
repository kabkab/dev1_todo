# 概要
golang, Vue.js, mysqlでTODOリストを作る
`docker-compose up`したらhttp://localhost:8888 にアクセス  
サインアップすれば利用可能

# build
```
docker-compose build
```

```
docker-compose up
```

# ServerSide
- Golang(1.11~)
- [gin](https://github.com/gin-gonic/gin)
- [gorm](https://github.com/jinzhu/gorm)


# memo
+ git cloneした後docker-compose buildすると、mysql-clientが無いと言われる

    対応：golang>Dockerfileを下の通り修正

    修正前
```
RUN apt-get update -qq && \
    apt-get install -y mysql-client vim
```

    修正後


```
RUN apt-get update -qq && \
    apt-get install -y default-mysql-client vim
```
