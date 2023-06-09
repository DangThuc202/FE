import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers}  from '../../services/userService';
import './UserManage.scss';
import ModalUser from './ModalUser';
import { Modal } from 'reactstrap';

class UserManage extends Component {


    constructor(props){
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL')
        if(response && response.errCode === 0 ){
            this.setState({
                arrUsers: response.users
            })
        }
    }


    handleAddNewUser = () => {
        alert('ok')
    }


    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <ModalUser/>
                <div className='title text-center'>abc</div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3' onClick={() => this.handleAddNewUser()}>
                        
                        <i className='fas fa-plus'></i>
                         Add new user
                    </button>
                </div>
                <div className='user-table'>
                <table id="customers">
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Action</th>
                        
                    </tr>

                    {arrUsers && arrUsers.map((item, index) => {
                        return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                        <button className='btn-delete'><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }                        
                </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
