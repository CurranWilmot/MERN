//import React
import React, {Component} from 'react'
import style from './style/style.module.css'

//define the class
class Main extends Component{
    
    render(){
        
        return(
            <>
                <div className={style.Main}>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default Main;