import React, { Component } from 'react';
import './Contact.css';
class Contact extends Component {

  render() {
    
    return (
      <div className="contact">
        <form>
        <table>
            <tr>
                <td> Name:</td>
                <td><input  placeholder="Name" type="text" /></td>
            </tr>
            <tr>
                <td> E-Mail:</td>
                <td><input  type="text"/><br/></td>
            </tr>
            <tr>
                <td><label for="subject">Your Message : </label></td>
                <td><textarea id="subject" name="subject" placeholder="Write something.."></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td>
                <input type="submit" value="Submit"/>
                </td>
            </tr>
        </table>
        </form>
      </div>
    )

  }

}


export default Contact