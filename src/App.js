import React from 'react';
import {Cards, Chart, CountryPicker, Footer} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import CoronaImage from './images/image.png';
class App extends React.Component{
    state = {
        data:{},
        country:'',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }
    handleCountryChange = async(country) =>{
        
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData,country:country});

    }
    render(){ 
        const {data, country} = this.state;
    return(
        <div className = {styles.container}>
            <img src={CoronaImage} className={styles.image} alt="Covid-19"/>
            <Cards  data={this.state.data} /> 
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data ={data} country={country}/>    
            <Footer />        
        </div>
    )
    }
}


export default App;