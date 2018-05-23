import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserLists extends Component {

	componentDidMount(){
		this.props.fetchUsers();
	}

	renderList(){
		return this.props.users.map((user)=>{
			return (
				<div className="user-card">
					{user.name}
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