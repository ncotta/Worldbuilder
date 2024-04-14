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
								about="A country for each celestial body, save for the magnificent Sun, who rules over three" 
							/>
						} 
					/>
					<Route 
						path="/beasts" 
						element={
							<CategoryPage 
								category="Beast" 
								title="Beasts"
								about="Varied and plentiful"
							/>
						} 
					/>
					<Route 
						path="/magic" 
						element={
							<CategoryPage 
								category="Magic" 
								title="Magic"
								about="Four Primary Elements form the foundation of all things, and a Fifth which exists only to bind"
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
