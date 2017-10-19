import React from 'react';
import Temperature from './src/components/Temperature.jsx';
import Header from './src/components/Header.jsx';
import './src/style/containers.css';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <div class="content">
                <div class="data">
                    <Temperature />
                </div>
            </div>
         </div>
      );
   }
}

export default App;
