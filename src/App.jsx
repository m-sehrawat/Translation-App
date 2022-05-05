import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './components/Navbar';
import { TranslateBox } from './components/TranslateBox';


export const App = () => {

    return (
        <>
            <Navbar />
            <TranslateBox />
            <ToastContainer autoClose={3000} />
        </>
    );
};

