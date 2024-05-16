import React from 'react';
import "./edit.css";

const Edit = () => {
  return (
    <div className="edit">
    <p>Edit user</p>
    <div className='edit-name'>
        <h4>Name</h4>
        <form className="edit-name">
          <input type="text" className="edit-name" placeholder="edit name" name="edit_name" />
          </form>
          </div>
          <div className='edit-email'>
            <h4>Email</h4>
            <form className="edit-email">
                <input type="text" className='edit-email' placeholder="edit email" name="edit_email" />
            </form>
          </div>
          <div className='edit-password'>
            <h4>Password</h4>
            <form className="edit-password">
                <input type="text" className='edit-password' placeholder="edit password" name="edit_password" />
            </form>
          </div>
          <div className="select">
            <form className='select'>
                <fieldset>
                <label><input type="checkbox" name="interest" value="admin" />Admin</label>
                    <label><input type="checkbox" name="interest" value="user" />User</label>     
                </fieldset>
            </form>
          </div>
          <button type="submit" value="send" className="updateBtn">Update</button>
    </div>
  )
}

export default Edit;