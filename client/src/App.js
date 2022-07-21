import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
function App() {
	return (
		<Routes>
			{/* Read One */}
			<Route path='/authors/:id' element={<Main />} />
			{/* Create */}
			<Route path='/authors/new' element={<Create />} />

			<Route path='*' element={<Main />} />
			{/* <Route path='/product/:id/edit' element={<Update />} */}
		</Routes>
	);
}

export default App;
