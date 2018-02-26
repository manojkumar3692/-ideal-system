import React from 'react';

import axios from 'axios';

export default  {


	getUsers() {

		return new Promise(function(resolve,reject) {
			axios.get('https://jsonplaceholder.typicode.com/users')
				.then((res) => {
					resolve(res.data)
				})
				.catch((err) => {
					reject(err)
				})
		})



	}
}