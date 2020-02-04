const fs = require('fs');
const http = require('http');


const template = fs.readFileSync(`${__dirname}/ui/index.html`, 'utf-8');
const homePage = fs.readFileSync(`${__dirname}/ui/home.html`, 'utf-8');
const aboutPage = fs.readFileSync(`${__dirname}/ui/about.html`, 'utf-8');
const contactPage = fs.readFileSync(`${__dirname}/ui/contact.html`, 'utf-8');


http.createServer((req, res) => {
	const pathName = req.url;
	if(pathName === '/' || pathName === '/home') {
		res.writeHead(200, {'Content-Type':'text/html'});
		const homeTemp = template.replace('{%RENDER%}', homePage);
		res.write(homeTemp);
		res.end();
	} else if(pathName === '/about') {
		res.writeHead(200, {'Content-Type':'text/html'});
		const aboutTemp = template.replace('{%RENDER%}', aboutPage);
		res.write(aboutTemp);
		res.end();
	}else if(pathName === '/contact') {
		res.writeHead(200, {'Content-Type':'text/html'});
		const contactTemp = template.replace('{%RENDER%}', contactPage);
		res.write(contactTemp);
		res.end();
	}else {
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write("<h1>Page not found: 404");
		res.end();
	}

}).listen(4000, () => {
	console.log('Listening on the port: 4000');
});