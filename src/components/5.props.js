import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
class LikeButton extends Component{
  constructor(props){
    super(props);//调用父类构造函数,是用来继承父类的私有属性 this.props = props;
    //这是一个私有的，本地的状态对象，名称是定死的
    this.state = {isLiked:false};
  }
  handleClick = ()=>{
   //setState有两层含义，1是把新的状态对象合并到老的状态对象上
   //2是会重新执行render方法返回新的React元素,把这个新的元素渲染到页面上
   //1.setState是异步方法
   //2.setState会合并执行
   //3.setState方法执行一个回调函数，在更改完状态后会执行这个回调函数
    this.setState({isLiked:!this.state.isLiked},()=>{
      console.log(this.state.isLiked);
    });
  }
  render(){
    console.log('render');
    return (
      <button
        onClick={this.handleClick}
      >{this.state.isLiked?this.props.unLikeText:this.props.likeText}</button>
    )
  }
}
//指定默认的属性对象
LikeButton.defaultProps = {
  likeText:'点赞',
  unLikeText:'取消'
}
/**
 * 1.先把传入这个组件的属性封装成一个对象 {likeText:"赞",unLikeText:"已赞"}
 * 2.先创建一个LikeButton的实例，创建的时候要把属性对象传给构造函数
 * 3.
 *
 */
render(<LikeButton unLikeText='取消2'/>,document.querySelector('#root'));
