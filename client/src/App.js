import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Edit from './components/Edit';
import Create from './components/Create';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
	// ! STATE / VARS
	const [authors, setAuthors] = useState([]);
	const [oneAuthor, setOneAuthor] = useState('');
	const [errors, setErrors] = useState([]);
	const [authorName, setAuthorName] = useState('');
	const navigate = useNavigate();

	// ! Handlers

	// TODO: FORM HANDLERS
	// ! Create
	const createButtonHandler = (e) => {
		//prevent default behavior of the submit
		e.preventDefault();
		//make a post request to create a new product
		axios
			.post('http://localhost:8080/api/authors', {
				name: oneAuthor,
			})
			.then((res) => console.log(res))
			.catch((err) => {
				console.log(err.response.data);
				const errorResponse = err.response.data.errors;
				const errorArr = [];
				for (const key of Object.keys(errorResponse)) {
					errorArr.push(errorResponse[key].message);
				}
				setErrors(errorArr);
			});
	};

	// * ID is passed via prop
	// ! Update
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

	// ! DELETE
	const removeFromDom = (productId) => {
		setAuthors(authors.filter((product) => product._id !== productId));
	};

	const deleteButtonHandler = (e, id) => {
		//prevent default behavior of the submit
		e.preventDefault();
		//make a post request to create a new product
		axios
			.delete(`http://localhost:8080/api/authors/${id}`)
			.then((res) => {
				removeFromDom(id);
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<Routes>
				{/* Create */}
				<Route
					path='/authors/new'
					element={
						<Create
							submitHandler={createButtonHandler}
							author={oneAuthor}
							setAuthor={setOneAuthor}
							errors={errors}
						/>
					}
				/>
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
					element={
						<Main
							setAuthors={setAuthors}
							authors={authors}
							deleteAuthor={deleteButtonHandler}
						/>
					}
				/>
				{/* <Route path='/product/:id/edit' element={<Update />} */}
			</Routes>
		</>
	);
}

export default App;
