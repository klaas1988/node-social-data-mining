'use strict';

var twitter = require('ntwitter'),
    credentials_t = require('./credentials.js').twitter;

var t = new twitter({
    consumer_key: credentials_t.consumer_key,
    consumer_secret: credentials_t.consumer_secret,
    access_token_key: credentials_t.access_token_key,
    access_token_secret: credentials_t.access_token_secret
});

t.stream(
    'statuses/filter',
    {track: ['search-string']},
    function(stream) {
        stream.on('data', function(tweet) {
            console.log(tweet.text);
        });
    }
);
