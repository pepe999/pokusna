import React from 'react'
import { toast } from 'react-toastify';


class Toast extends React.Component {

    notify = () => {
        toast("Default Notification !");
  
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
  
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT
        });
  
        toast.warn("Warning Notification !", {
          position: toast.POSITION.BOTTOM_LEFT
        });
  
        toast.info("Info Notification !", {
          position: toast.POSITION.BOTTOM_CENTER
        });
  
        toast("Custom Style Notification with css class!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar'
        });
      };
      
    render() {
      return (
        <div className="Toast">
          <p>toast - notifikace</p> 
          <button onClick={this.notify}>Notify !</button>
        </div>
      );
    }
  }
    
  export default Toast;

  // Example usage: <ShoppingList name="Mark" />