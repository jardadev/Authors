import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Edit from './components/Edit';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
	// ! STATE / VARS
	const [authors, setAuthors] = useState([]);
	const [oneAuthor, setOneAuthor] = useState({});
	// const [errors, setErrors] = useState([]);
	const [authorName, setAuthorName] = useState('');
	const navigate = useNavigate();

	// ! Handlers

	// TODO: FORM HANDLERS
	// * ID is passed via prop
	const updateButtonHandler = (e, id) => {
		//prevent default behavior of the submit
		e.preventDefault();
		//make a post request to create a new product
		axios
			.put(`http://localhost:8080/api/authors/${id}`, {
				name: oneAuthor,
			})
			.then((res) => {
				console.log(res.data);
				navigate(-1);
			})
			.catch((err) => console.log(err));
	};
	return (
		<>
			<Routes>
				{/* Read One
			<Route path='/authors/:id' element={<Main />} /> */}
				{/* Edit */}
				<Route
					path='/authors/:id/edit'
					element={
						<Edit
							submitHandler={updateButtonHandler}
							setAuthor={setOneAuthor}
							setAuthorName={setAuthorName}
							authorName={authorName}
							author={oneAuthor}
						/>
					}
				/>

				<Route
					path='*'
					element={<Main setAuthors={setAuthors} authors={authors} />}
				/>
				{/* <Route path='/product/:id/edit' element={<Update />} */}
			</Routes>
		</>
	);
}

export default App;
