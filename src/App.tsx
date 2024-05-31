import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SignInView, SignUpView } from './features/authentication';
import Layout from './layout';
import HomeView from './features/home';
import ErrorView from './features/error';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/sign-in' element={<SignInView />} />
          <Route path='/sign-up' element={<SignUpView />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<HomeView />} />
          </Route>
          <Route path='*' element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
