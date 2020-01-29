import {domain} from './../constants';

export default async function (entity, method = 'GET', body = undefined)  {

	this.setState({
		fetching: true,
		error: false
	})


	body = body ? JSON.stringify(body) : body;
	 

	fetch(`${domain}/${entity}`, {
		method,
		headers: new Headers({

		}),
		body
	})
	.then(res => res.json())
	.catch(err => {
		console.error(`An error occured while fetching ${entity} `);
		this.setState({
			fetching: false,
			error: 'fetching failed'
		})
	})
	.then(res => {
		this.setState({
			fetching: false,
			error: false,
			fetched: res
		})
	})
}