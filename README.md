## FullVote - Microservice

[![Build Status](https://travis-ci.org/fullvote/fullvote-service.svg?branch=greenkeeper%2Finitial)](https://travis-ci.org/fullvote/fullvote-service)
[![Greenkeeper badge](https://badges.greenkeeper.io/fullvote/fullvote-service.svg)](https://greenkeeper.io/)


### Usage

Send a post to the microservice url according to _this_ json schema.
(Todo: make "this" a link to a json schema, or inline it.)

[For now](#2) the url is [whatever](https://b6n6f4cc6d.execute-api.us-east-1.amazonaws.com/prod/getWinner).

The response is json like blah. (Todo: make "blah" a link to json schema, or inline it.)


#### Example

```bash
curl -H "Content-Type: application/json" -d '{"ballots": [["sanders", "clinton"], ["clinton"], ["sanders", "clinton"], ["trump"]]}' https://b6n6f4cc6d.execute-api.us-east-1.amazonaws.com/prod/getWinner
```

Returns

```json
{
  "success": true,
  "names": ["sanders"],
  "received": 2,
  "total": 4,
  "percentage": 50
}
```
