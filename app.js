#!/usr/bin/env node
var watch = require('node-watch'),
    sass = require('node-sass'),
    fs = require('fs'),
    express = require('express'),
    app = express();

switch(process.argv[2]){
    default:
    case 'help':
        help();
    break;
    case 'server':
        server();
    break;
    case 'compile':
        compile();
    break;
    case 'watch':
        watch();
    break;
}

function server () {
    var status = [
        {
            name: 'Status',
            stamp: 'Last Update 7/17 by Robin Sherwood',
            fields: [
                {label: 'Status Update', type: 'longtext', value: 'Completed phase two check point agreed to move to phase three pending the clusure of the current open issues. Planned finish date was adjuested by one week to acoomodate for the end of quarter.' },
                {label: 'Last Updated', type: 'date', value: new Date(1400567892021)},
                {label: 'Health', type: 'text', value: 'On Plan'},
                {label: 'Scope Status', type: 'text', value: 'On Plan'},
                {label: 'Budget Status', type: 'text', value: 'Needs Help'},
                {label: 'Estimated Cost', type: 'text', value: 236300},
                {label: 'Schedule Status', type: 'text', value: 'Attention'}
            ]
        },
        {
            name: 'Status',
            stamp: 'Last Update 7/15 by Herpa Derpa',
            fields: [
                { label: 'Status Update', type: 'longtext', value: 'Herpin all the derps in the land.' },
                {label: 'Last Updated', type: 'date', value: new Date(2234567892021)},
                {label: 'Health', type: 'text', value: 'Herpd'},
                {label: 'Scope Status', type: 'text', value: 'Derpable'},
                {label: 'Budget Status', type: 'text', value: 'Herpd'},
                {label: 'Estimated Cost', type: 'text', value: 31337101},
                {label: 'Schedule Status', type: 'text', value: 'LOL'}
            ]
        }
    ];

    var profile = [
        {
            name: 'Profile',
            stamp: 'Last Update 7/15 by Tom Yang',
            fields: [
                { label: 'Description', type: 'longtext', value: 'Customer reported issues.' },
                {label: 'Planned Start', type: 'date', value: new Date(1234577892021)},
                {label: 'Planned Finish', type: 'date', value: new Date(2111578892021)},
                {label: 'Approval Status', type: 'text', value: 'Pending'},
                {label: 'Priority', type: 'text', value: 'Low'},
                {label: 'Manager', type: 'text', value: 'Mr. T'},
                {label: 'Phase', type: 'text', value: 'Planning'},
                {label: 'Sponsor', type: 'text', value: 'Tang'},
                {label: 'Budget', type: 'text', value: 33},
                {label: 'Program', type: 'text', value: 'Customer Betterment'},
                {label: 'Overall Score', type: 'text', value: 1.2},
                {label: 'Risk Score', type: 'text', value: 1.1},
                {label: 'Benefit Score', type: 'text', value: 0.7}
            ]
        },
        {
            name: 'Profile',
            stamp: 'Last Update 7/15 by Herpa Derpa',
            fields: [
                { label: 'Description', type: 'longtext', value: 'Profile for the Herpin of the derps.' },
                {label: 'Planned Start', type: 'date', value: new Date(2234577892021)},
                {label: 'Planned Finish', type: 'date', value: new Date(2234578892021)},
                {label: 'Approval Status', type: 'text', value: 'GetRDone'},
                {label: 'Priority', type: 'text', value: 'Numero Uno'},
                {label: 'Manager', type: 'text', value: 'Bill Paxton'},
                {label: 'Phase', type: 'text', value: 'Locked'},
                {label: 'Sponsor', type: 'text', value: 'Bill Murray'},
                {label: 'Budget', type: 'text', value: 1000000},
                {label: 'Program', type: 'text', value: 'Yes'},
                {label: 'Overall Score', type: 'text', value: 8008},
                {label: 'Risk Score', type: 'text', value: 1337},
                {label: 'Benefit Score', type: 'text', value: 9001}
            ]
        }
    ];

    var risks = [
        {
            name: 'Risks',
            stamp: 'Last Update 7/15 by Tom Yang',
            fields: [
                {label: 'Description', type: 'longtext', value: 'Customer reported issues.'},
                {label: 'Planned Start', type: 'date', value: new Date(1234577892021)},
                {label: 'Planned Finish', type: 'date', value: new Date(2111578892021)},
                {label: 'Approval Status', type: 'text', value: 'Pending'},
                {label: 'Priority', type: 'text', value: 'Low'},
                {label: 'Manager', type: 'text', value: 'Mr. T'},
                {label: 'Phase', type: 'text', value: 'Planning'},
                {label: 'Sponsor', type: 'text', value: 'Tang'},
                {label: 'Budget', type: 'text', value: 33},
                {label: 'Program', type: 'text', value: 'Customer Betterment'},
                {label: 'Overall Score', type: 'text', value: 1.2},
                {label: 'Risk Score', type: 'text', value: 1.1},
                {label: 'Benefit Score', type: 'text', value: 0.7}
            ]
        },
        {
            name: 'Risks',
            stamp: 'Last Update 7/15 by Herpa Derpa',
            fields: [
                { label: 'Description', type: 'longtext', value: 'Profile for the Herpin of the derps.'},
                {label: 'Planned Start', type: 'date', value: new Date(2234577892021)},
                {label: 'Planned Finish', type: 'date', value: new Date(2234578892021)},
                {label: 'Approval Status', type: 'text', value: 'GetRDone'},
                {label: 'Priority', type: 'text', value: 'Numero Uno'},
                {label: 'Manager', type: 'text', value: 'Bill Paxton'},
                {label: 'Phase', type: 'text', value: 'Locked'},
                {label: 'Sponsor', type: 'text', value: 'Bill Murray'},
                {label: 'Budget', type: 'text', value: 1000000},
                {label: 'Program', type: 'text', value: 'Yes'},
                {label: 'Overall Score', type: 'text', value: 8008},
                {label: 'Risk Score', type: 'text', value: 1337},
                {label: 'Benefit Score', type: 'text', value: 9001}
            ]
        }
    ]

    app.use(express.static(__dirname));

    function getRisksForEnt(ent) {
        return ent==='derp' ? risks[1] : risks[0];
    }

    function getStatusForEnt(ent) {
        return ent==='derp' ? status[1] : status[0];
    }

    function getProfileForEnt(ent) {
        return ent==='derp' ? profile[1] : profile[0];
    }

    app.get('/profile/:entid', function(req,res) {
        var ent = req.params.entid;
        console.dir('serving /profile/'+ent);
        res.send(JSON.stringify(getProfileForEnt(ent)));
        res.end();
    });

    app.get('/status/:entid', function(req,res) {
        var ent = req.params.entid;
        console.dir('serving /status/'+ent);
        res.send(JSON.stringify(getStatusForEnt(ent)));
        res.end();
    });

    app.get('/widgets/:entid', function(req,res){
        var ent = req.params.entid;
        console.dir('serving /widgets/' + ent);
        var data =[];
        data.push(getStatusForEnt(ent));
        data.push(getProfileForEnt(ent));
        data.push(getRisksForEnt(ent));
        res.send(JSON.stringify(data));
        res.end();
    });

    app.get('/:entid', function(req,res) {
        var ent = req.params.entid;
        res.redirect('/#/index.html?entid='+ent);
    });

    console.dir('Express started listening on port 8000');
    app.listen(8000);
}

function compile (filename) {
    sass.render({
        data: fs.readFileSync('css/prototype.scss'),
        success: function (css) {
            fs.writeFileSync('css/default.css', css);
            console.log('sass compiled');
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function watch () {
    watch('css/prototype.scss', function (filename) {
        compile(filename);
    });
}

function help () {
    console.log("Options:");
    console.log("  help");
    console.log("  server");
    console.log("  watch");
    console.log("  compile");
}
