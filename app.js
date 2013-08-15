var express = require('express'),
	app = express();
var status = [
{
	status: {
		name: 'Status',
		stamp: 'Last Update 7/17 by Robin Sherwood',
		fields: [
			{ label: 'Status Update', type: 'longtext', value: 'Completed phase two check point agreed to move to phase three pending the clusure of the current open issues. Planned finish date was adjuested by one week to acoomodate for the end of quarter.' },
			{label: 'Last Updated', type: 'date', value: new Date(1400567892021),
			{label: 'Health', type: 'text', value: 'On Plan'},
			{label: 'Scope Status', type: 'text', value: 'On Plan'},
			{label: 'Budget Status', type: 'text', value: 'Needs Help'},
			{label: 'Estimated Cost', type: 'text', value: 236300},
			{label: 'Schedule Status', type: 'text', value: 'Attention'}
		]
	}
},
{
	status: {
		name: 'Status',
		stamp: 'Last Update 7/15 by Herpa Derpa',
		fields: [
			{ label: 'Status Update', type: 'longtext', value: 'Herpin all the derps in the land.' },
			{label: 'Last Updated', type: 'date', value: new Date(2234567892021),
			{label: 'Health', type: 'text', value: 'Herpd'},
			{label: 'Scope Status', type: 'text', value: 'Derpable'},
			{label: 'Budget Status', type: 'text', value: 'Herpd'},
			{label: 'Estimated Cost', type: 'text', value: 31337101},
			{label: 'Schedule Status', type: 'text', value: 'LOL'}
		]
	}
}];

app.use(express.static(__dirname));

app.get('/status/:entid', function(req,res) {
	var ent = req.params.entid;
	console.dir('serving /status/'+ent);
	if(ent === '11111111-1111-1111-1111-111111111111') {
		res.send(JSON.stringify(status[1]));
	}
	else {
		res.send(JSON.stringify(status[0]));
	}
	res.end();
});

console.dir('Express started listening on port 8000');
app.listen(8000);
