import React,{Component, StyleSheet} from 'react';
import StyleOther from '../style/style.css';
let names = ['Alice','Emily','Kate'];
export default class Root extends Component{
   // 构造
     constructor(props) {
       super(props);
       // 初始状态
       this.state = {
           value:10
       };
     }
    render() {
        return (
            <div >
                {
                    names.map((data,index)=>{
                        return(<div style={StyleOther} onClick={()=>{alert(data)}}>{data}</div>)
                    })
                }
                <button style={{width:100,height:30,backgroundColor:'yellow',alignItems:'center'}} onClick={()=>{alert('点击了')}}>按钮</button>
                <div>
                    <input type="text" value={this.state.value} onChange={(event)=>{
                        console.log(event);
                        this.setState({value:event.target.value})
                    }}/>
                    <p>{this.state.value}</p>
                </div>

            </div>
        );
    }
}

