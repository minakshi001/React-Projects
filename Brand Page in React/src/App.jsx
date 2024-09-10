//react components are denoted by capital alphabets

import './App.css';

import Navigation from './components/Navigation';
import HeroSection from './components/Hero';

const App = () => {
    return (
        <div>
            <Navigation/>
            <HeroSection/>
        </div>
    )
};


//this function is available for export outside the file
export default App;