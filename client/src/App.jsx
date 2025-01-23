import './styles/App.css';
import AppLayout from './components/AppLayout/AppLayout';
import CivilizationMap from './components/CivilizationMap/CivilizationMap';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import CategoryPage from './pages/CategoryPage';
import MagicPage from './pages/MagicPage';
import MagicElementPage from './pages/MagicElementPage';
import DivinityPage from './pages/DivinityPage';
import DivinityTierPage from './pages/DivinityTierPage';
import { UserContextProvider } from './contexts/UserContext';
import { Route, Routes } from 'react-router-dom';


function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route path={"/"} element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/about" element={<div>About</div>} />
					<Route path="/contact" element={<div>Contact</div>} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />}/>
					<Route path="/create" element={<CreatePost />}/>
					<Route 
						path="/civilizations" 
						element={
							// <CivilizationMap/>
							<CategoryPage 
								category="Civilization" 
								title="Civilizations" 
								about="A country for each celestial body, save for the magnificent Sun, who rules over three" 
							/>
						} 
					/>
					<Route 
						path="/magic" 
						element={ <MagicPage /> } 
					/>
					<Route
						path="/magic/:element"
						element={ <MagicElementPage /> }
					/>
					<Route 
						path="/jinn" 
						element={ <DivinityPage/> } 
					/>
					<Route 
						path="/jinn/:tier" 
						element={ <DivinityTierPage /> }
					/>
					<Route 
						path="/characters" 
						element={
							<CategoryPage 
								category="People" 
								title="People"
								about="Important characters around which the story revolves"
							/>
						} 
					/>
					<Route path="/post/:id" element={<PostPage />} />
					<Route path="/edit/:id" element={<EditPost />} />
				</Route>
			</Routes>
		</UserContextProvider>
	)
}

export default App;
