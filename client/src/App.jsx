import React from 'react';
import './styles/App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import CategoryPage from './pages/CategoryPage';
import { UserContextProvider } from './components/UserContext';
import { Route, Routes } from 'react-router-dom';


function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />}/>
					<Route path="/create" element={<CreatePost />}/>
					<Route 
						path="/civilizations" 
						element={
							<CategoryPage 
								category="Civilization" 
								title="Civilizations" 
								about="Civ VI baby" 
							/>
						} 
					/>
					<Route 
						path="/beasts" 
						element={
							<CategoryPage 
								category="Beast" 
								title="Beasts"
								about="Beasties"
							/>
						} 
					/>
					<Route 
						path="/magic" 
						element={
							<CategoryPage 
								category="Magic" 
								title="Magic"
								about="Magics of the utmost kind"
							/>
						} 
					/>
					<Route 
						path="/jinn" 
						element={
							<CategoryPage 
								category="Divinity" 
								title="Jinn"
								about="The gods of this world are surreal and lovely to behold"
							/>
						} 
					/>
					<Route 
						path="/characters" 
						element={
							<CategoryPage 
								category="Character" 
								title="Characters"
								about="Chars"
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
