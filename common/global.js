const fs = require('fs');
const path = require('path');
global.loaddir = require('../tool/loaddir');
global.model = require('../mongodb/model');
global.moment = require('moment');
global.httpStatus = loaddir('httpStatus');
global.certs = {
	public: null,
	private: null
}
global.loadCert = async _ => {
	try {
		const p1 = fs.readFile(path.join('cert', 'public.key'));
		const p2 = fs.readFile(path.join('cert', 'private.key'));
		const [public, private] = await Promise.all([p1, p2]);
		certs.public = public;
        certs.private = private;
        console.log(public,private)
	} catch (err) {
		console.log(err)
	}
}
