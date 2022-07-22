import React from 'react';
import { Link } from 'react-router-dom';

const Create = ({ submitHandler, author, setAuthor, errors }) => {
	return (
		<div>
			{errors.map((error, i) => {
				return <p key={i}>{error}</p>;
			})}
			{JSON.stringify(author)}
			<Link to={'/'}>Home</Link>
			<h1>Edit this Author:</h1>

			<form onSubmit={(e) => submitHandler(e)}>
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

export default Create;
