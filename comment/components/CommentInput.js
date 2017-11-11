import React from 'react';
export default class CommentInput extends React.Component{
    render(){
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="username" className="control-label col-md-2">用户名</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="control-label col-md-2">内容</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-10 col-md-offset-2">
                        <input type="submit" className="btn btn-primary" value="发言"/>
                    </div>
                </div>
            </form>
        )
    }
}