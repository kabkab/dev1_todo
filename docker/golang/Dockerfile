FROM golang:latest

RUN apt-get update -qq && \
    apt-get install -y default-mysql-client vim

WORKDIR /go/src/

COPY . .

ENV GO111MODULE=on

RUN go build
RUN go install

ENV PATH /go/bin:$PATH