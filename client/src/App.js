import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Report from './Report';
import Main from './Main';
import Contact from './Contact';
import Stack from './Stack';
import ScrollToTop from './ScrollToTop';

function App() {
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/report/*" element={<Report />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/stack" element={<Stack />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</ScrollToTop>
		</Router>
	);
}

export default App;
