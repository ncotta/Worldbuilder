import './App.css';
import AppLayout from './components/AppLayout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import EditPostPage from './pages/EditPostPage/EditPostPage';
import PostPage from './pages/PostPage/PostPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import MagicPage from './pages/MagicPage/MagicPage';
import MagicElementPage from './pages/MagicElementPage/MagicElementPage';
import DivinityPage from './pages/DivinityPage/DivinityPage';
import DivinityTierPage from './pages/DivinityTierPage/DivinityTierPage';
import CivilizationPage from './pages/CivilizationPage/CivilizationPage';
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
					<Route path="/create" element={<CreatePostPage />}/>
					<Route path="/edit/:id" element={<EditPostPage />} />
					<Route path="/post/:id" element={<PostPage />} />
					<Route 
						path="/civilizations" 
						element={ <CivilizationPage/> } 
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
				</Route>
			</Routes>
		</UserContextProvider>
	)
}

export default App;
