var express = require('express');

module.exports = {

    BindWithCluster: function (app: any) {
        var env: any = app.get('env');
        if ('production' == env) {
            app.engine('.html', require('ejs').__express);
            app.set('views', './views');
            app.use(express.static('./public'));
        }

        app.get('/', function (req: any, res: any) {
            res.send('ok http');
        });
        
        app.get('/test', function (req: any, res: any) {
            console.log("test api...");
            res.send('ok http');
        });
    }
}