import React from "react";

class AddTask extends React.Component {
    descRef = React.createRef();
    dateRef = React.createRef();

    handleSubmit = e => {
        //1) Prevent from submiting
        e.preventDefault();

        //2) Task detail obj
        const task = {
            desc: this.descRef.current.value,
            date: this.dateRef.current.value
        }
        
        //3) Add tasks to the state
        this.props.addTask(task);

        //4) Toggle click state
        this.props.toggleClickState("Task");
    }

  render() {
    return (
      <div className="add_task__modal">
        <div className="add__task">
          <form className="add_task__form" onSubmit={this.handleSubmit}>
            <h2>Add Task</h2>
            <textarea
              placeholder="Task"
              ref={this.descRef}
              rows="5"
              style={{ resize: "none" }}
            ></textarea>
            <input type="date" ref={this.dateRef} />
            <div className="task__footer">
              <button type="submit" className="add_task__add">
                Add
              </button>
              <button
                className="add_task__cancel"
                onClick={() => this.props.toggleClickState("Task")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTask;
