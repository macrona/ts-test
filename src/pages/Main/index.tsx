import React from 'react';
import { FirstLayout } from '../Layout';

const Header = () => <div>This is header</div>;
const Content = () => <div>This is content</div>;
const Footer = () => <div>This is footer</div>;
// function Main() {
    
// }
const myLayout = new FirstLayout(<Header />, <Content />, <Footer />)
class Main extends React.Component{
    render(): React.ReactNode {
        return(
            <div>
                {myLayout.render()}
                main-content
            </div>
        )
    }
}
export default Main;