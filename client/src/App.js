import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
function App() {
	return (
		<Routes>
			<Route path='/product/:id' element={<Main />} />
			{/* <Route path='/product/:id/edit' element={<Update />} />
			
			<Route path='*' element={<Main />} /> */}
		</Routes>
	);
}

export default App;
