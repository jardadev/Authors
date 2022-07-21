import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Main = () => {
	// const deleteAuthor = (authorId) => {
	// 	axios
	// 		.delete(`http://localhost:8080/api/author/${authorId}`)
	// 		.then((res) => {
	// 			removeFromDom(authorId);
	// 		})
	// 		.catch((err) => console.error(err));
	// };
	const [authors, setAuthors] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:8080/api/authors')
			.then((res) => {
				setAuthors(res.data.authors);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<h1 className='text-center text-lg underline'>Author List:</h1>
			<table className='table table-zebra w-full text-center'>
				<thead>
					<tr>
						<th>Author</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{authors.map((author) => (
						<tr key={author._id}>
							<td>
								<Link to={`/author/${author._id}`}>
									{author.name}
								</Link>
							</td>
							<td>
								<button className='btn btn-sm'>Edit</button>
								<button className='btn btn-sm'>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default Main;