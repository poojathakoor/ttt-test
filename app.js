var express = require('express'),
    bodyParser = require('body-parser'),
    engines = require('consolidate'),
    path = require('path'),
    request = require('request'),
    minHeap = require('./min-heap');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

//index
app.get('/', function(req, res) {
    res.render('index.html');
});

/*
Lists top N frequent words
Creates a map to store count of each word
uses Min Heap to fetch only top N frequent words
*/
app.get('/words/:count', function(req, res) {
    var n = parseInt(req.params['count']);
    request.get('http://terriblytinytales.com/test.txt', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var heap = new minHeap(function(l, r) {
                return l.weight - r.weight;
            });
            var words = body.match(/\b(\w+)\b/g);
            var wordCountsMap = words.reduce(function(memo, word) {
                memo[word] = (memo[word] || 0) + 1;
                return memo;
            }, {});

            var j = 0;
            for (var word in wordCountsMap) {
                if (j < n)
                    heap.insert({ weight: wordCountsMap[word], id: word });
                else if (heap.getHead() && heap.getHead().weight < wordCountsMap[word])
                    heap.replaceHead({ weight: wordCountsMap[word], id: word });
                j++;
            }
            res.send(heap.getHeap());
        }else{
            res.status(500).send("Something went wrong!");
        }
    });
});


app.listen(process.env.PORT || 3000);
