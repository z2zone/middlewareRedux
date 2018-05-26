import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../actions';

class UserLists extends Component {

	componentDidMount(){
		this.props.fetchUsers();
	}

	renderList(){
		return this.props.users.map((user)=>{
			return (
				<div className="card card-block" key={user.email}>
					<div className="card-body">
					    <h5 className="card-title">{user.name}</h5>
					    <hr/>
					    <p className="card-text">Company: {user.company.name}</p>
					    <p className="card-text">Email: {user.email}</p>
					    <a href="#" className="btn btn-primary">Contact the Person</a>
					</div>
				</div>
			);
		});
	}

	render(){
		return(
			<div className="user-lists">
				{this.renderList()}
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps, { fetchUsers })(UserLists);