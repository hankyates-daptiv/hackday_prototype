#!/usr/bin/env node
var watch = require('node-watch'),
    sass = require('node-sass'),
    fs = require('fs'),
    express = require('express'),
    app = express();

switch (process.argv[2]) {
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
    watch_task();
    break;
}

function server() {
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
                {label: 'Status Update', type: 'longtext', value: 'Herpin all the derps in the land.' },
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
                {label: 'Description', type: 'longtext', value: 'Customer reported issues.' },
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
                {label: 'Description', type: 'longtext', value: 'Profile for the Herpin of the derps.' },
                {label: 'Planned Start', type: 'date', value: new Date(2234577892021)},
                {label: 'Manager', type: 'text', value: 'Bill Paxton'},
                {label: 'Sponsor', type: 'text', value: 'Bill Murray'},
                {label: 'Budget', type: 'text', value: 1000000},
                {label: 'Risk Score', type: 'text', value: 1337},
                {label: 'Benefit Score', type: 'text', value: 9001}
            ]
        }
    ];

    var risk = [
        {// 0: normal data
            name: 'Risks',
            stamp: 'Last Update 7/11 by Drew Burlingame',
            headers: ['Item', 'Owner', 'Due Date', 'Actions'],
            rows: [
                {item: 'DNS Configuration', owner: 'Dave Lindquist', dueDate: new Date(2013,7,1), actions: ''},
                {item: 'Security Upgrade', owner: 'John Dillinger', dueDate: new Date(2013, 8,6), actions: ''},
                {item: 'App Re-Write', owner: 'Drew Burlingame', dueDate: new Date(2013, 11, 20), actions: ''}
            ]
        },
        {// 1: derp data
            name: 'Risks',
            stamp: 'Last Update 8/18/2013 by Doc Brown',
            headers: ['Item', 'Owner', 'Due Date', 'Actions'],
            rows: [
                {item: 'Get Derpy', owner: 'Herpa McDerpestan', dueDate: new Date(2020, 12, 20), actions: ''},
                {item: 'Hug all the cats', owner: 'YouTube', dueDate: new Date(2002, 02, 20), actions: ''},
                {item: 'Get Down', owner: 'Everyone', dueDate: new Date(2013, 08, 16), actions: ''},
                {item: 'Get Funky', owner: 'Everyone', dueDate: new Date(2013, 08, 16), actions: ''}
            ]
        }
    ];

    var openIssues = [
        {// 0: normal data
            name: 'Open-issues',
            stamp: 'Last Update 6/11 by John Emau',
            headers: ['Priority', 'Description', 'Assignee', 'Due Date'],
            rows: [
                {priority: 'High', description: 'Dashboard does not have minesweeper', dueDate: new Date(2013,7,11), assignee: 'Tom Fulp'},
                {priority: 'Low', description: 'Not fast enough', dueDate: new Date(2012, 8,16), assignee: 'Tom Stone'},
                {priority: 'Medium', description: 'Has too many support cases', dueDate: new Date(2012, 1, 20), assignee: 'Tom Yang'}
            ]
        },
        {// 1: derp data
            name: 'Open-issues',
            stamp: 'Last Update 8/18/2013 by Doc Brown',
            headers: ['Item', 'Owner', 'Due Date', 'Actions'],
            rows: [
                {priority: 'Highest', description: 'Derps to few', dueDate: new Date(2014,7,11), assignee: 'Thing 1'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'MECHA', description: 'Too many herps', dueDate: new Date(2015, 8,16), assignee: 'Thing 2'},
                {priority: 'Mediumly', description: 'You got your derp in my herp!', dueDate: new Date(2016, 1, 20), assignee: 'Tony Danza'}
            ]
        }
    ];

    var milestones = [
        {
            name: 'Milestones',
            stamp: 'Last Updated 4/23 by James Trinklein',
            headers: ['Task Name', '%', 'Planned Finish'],
            rows: [
                {task: 'Cognos 10 Upgrade', percent: 100, plannedFinish: new Date(2012, 11, 22)},
                {task: 'Convert PPM to SPA', percent: 32, plannedFinish: new Date(2013, 11, 22)}
            ]
        },
        {
            name: 'Milestones',
            stamp: 'Last Updated 4/20 by Tha Derper',
            headers: ['Task Name', '%', 'Planned Finish'],
            rows: [
                {task: 'New derpington conversion', percent: 98, plannedFinish: new Date(2013, 9, 2)},
                {task: 'Add Derp-a-Herp app', percent: 101, plannedFinish: new Date(2014, 1, 2)},
                {task: 'dummy data 1', percent: 42, plannedFinish: new Date(2013, 11, 22)},
                {task: 'dummy data 1', percent: 42, plannedFinish: new Date(2013, 11, 22)},
                {task: 'dummy data 1', percent: 42, plannedFinish: new Date(2013, 11, 22)},
                {task: 'dummy data 1', percent: 42, plannedFinish: new Date(2013, 11, 22)},
                {task: 'dummy data 1', percent: 42, plannedFinish: new Date(2013, 11, 22)},
                {task: 'dummy data 1', percent: 42, plannedFinish: new Date(2013, 11, 22)},
                {task: 'dummy data 1', percent: 42, plannedFinish: new Date(2013, 11, 22)},
                {task: 'dummy data 1', percent: 42, plannedFinish: new Date(2013, 11, 22)}
            ]
        }

    ];

    app.use(express.static(__dirname));

    function getStatusForEnt(ent) {
        return ent === 'derp' ? status[1] : status[0];
    }

    function getProfileForEnt(ent) {
        return ent === 'derp' ? profile[1] : profile[0];
    }

    function getRisksForEnt(ent) {
        return ent==='derp' ? risk[1] : risk[0];
    }

    function getMilestonesForEnt(ent) {
        return ent==='derp' ? milestones[1] : milestones[0];
    }

    function getOpenIssuesForEnt(ent) {
        return ent==='derp' ? openIssues[1] : openIssues[0];
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

    app.get('/risks/:entid', function(req,res) {
        var ent = req.params.entid;
        console.dir('serving /risks/'+ent);
        res.send(JSON.stringify(getRisksForEnt(ent)));
        res.end();
    });

    app.get('/openissues/:entid', function(req,res) {
        var ent = req.params.entid;
        console.dir('serving /openissues/'+ent);
        res.send(JSON.stringify(getOpenIssuesForEnt(ent)));
        res.end();
    });

    app.get('/milestones/:entid', function(req,res) {
        var ent = req.params.entid;
        console.dir('serving /milestones/'+ent);
        res.send(JSON.stringify(getMilestonesForEnt(ent)));
        res.end();
    });

    app.get('/widgets/:entid', function(req,res){
        var ent = req.params.entid;
        console.dir('serving /widgets/' + ent);
        var data =[];
        data.push(getProfileForEnt(ent));
        data.push(getStatusForEnt(ent));
        data.push(getRisksForEnt(ent));
        data.push(getOpenIssuesForEnt(ent));
        data.push(getMilestonesForEnt(ent));
        res.send(JSON.stringify(data));
        res.end();
    });

    app.get('/:entid', function (req, res) {
        var ent = req.params.entid;
        res.redirect('/#/index.html?entid=' + ent);
    });

    console.dir('Express started listening on port 8000');
    app.listen(8000);
}

function compile(filename) {
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

function watch_task() {
    watch('css/prototype.scss', function (filename) {
        compile(filename);
    });
}

function help() {
    console.log("Options:");
    console.log("  help");
    console.log("  server");
    console.log("  watch");
    console.log("  compile");
}
