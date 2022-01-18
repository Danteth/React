import React, { Component } from "react";
import jsonData from '../res/text.json'

class CContents extends Component{

    constructor(){
        super()
        this.state = {msg: 'Witaj użytkowniku. Kliknij przycisk aby poznać wiadomość'};
        // this.txtData = () => JSON.parse(JSON.stringify(jsonData));
        // const imgContext = require.context('../res/', false, /\.jpg$/);
        // let img = {};
        // this.imgs = imgContext.key().reduce( (icons, file) =>{
        //     const cname = imgContext(file).default;
        //     const label = file.slice(2, -4);
        //     img[label] = cname;
        //     return img;
        // },{});
    }
    changeMsg(){
        this.setState({msg: 'Tajemnica'});
        console.log('Przycisk został naciśnięty');
    }
    render(){
        // const items = [];
        // for(let i=0; i<this.txtData().count; i++){
        //     let value = this.txtData().text[i];
        //     items.push(
        //         <div className="contentsFlex">
        //             <img className="contentsFlexImg" src={this.imgs['img'+(i+1)]} alt=""/>
        //             <p className="contentsFlexTxt">{value}</p>
        //         </div>
        //     );
        // }
        return(
            <div className="contentsDivClass">
                {/* {items} */}
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.changeMsg()}>Kliknij, aby poznać tajemnicę</button>
            </div>
        )
    }
}

export default CContents