import { useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Edit = ({
	submitHandler,
	setAuthor,
	setAuthorName,
	author,
	authorName,
}) => {
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/authors/${id}`)
			.then((res) => {
				setAuthor(res.data.author.name);
			})
			.catch((err) => console.error(err));
	}, [id]);

	return (
		<div>
			<Link to={'/'}>Home</Link>
			<h1>Edit this Author:</h1>

			<form onSubmit={(e) => submitHandler(e, id)}>
				<div className='form-control'>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Edit;
