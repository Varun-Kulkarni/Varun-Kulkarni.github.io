import React, {Component} from 'react';
import ReactDOM from 'react-dom';
/** Modules **/
import HeroSection from '../hero/HeroSection';
import AboutSection from '../about/AboutSection';
import StacksSection from '../stacks/StacksSection';
import ProjectSection from '../projects/ProjectSection';
import OrganizationsSection from '../orgs/Organizations';
import Footer from '../footer/Footer'
import CardCreator from '../projects/cardCreator';
class Main extends Component {
    
    render = () => {return (
        <div className="App">
            <HeroSection />
            <header className="App-header">
                <div className="App-main">
                    <div className="container">
                    <AboutSection />
                    <StacksSection />
                    <ProjectSection />
                    <OrganizationsSection />
                    <Footer />  
                    </div>  
                </div>
            </header>
        </div>
        );
    }
    componentDidMount() {
        if (document.getElementById('card-creator-root')) {
            ReactDOM.render(<CardCreator />, document.getElementById('card-creator-root'));
        }          
    }
}
export default Main;