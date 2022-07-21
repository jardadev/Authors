import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
	const deleteAuthor = (authorId) => {
		axios
			.delete(`http://localhost:8080/api/author/${authorId}`)
			.then((res) => {
				removeFromDom(authorId);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<h1>Author List:</h1>
			{authors.map((author, i) => (
				<div key={i}>
					<Link to={`/author/${author._id}`}>{author.title}</Link>
					<button
						className='btn btn-primary'
						onClick={(e) => deleteAuthor(author._id)}
					>
						Remove
					</button>
				</div>
			))}
		</div>
	);
};
export default Main;
