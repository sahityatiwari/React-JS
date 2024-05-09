import React, { useState, useEffect } from "react";
import "./style.css";

const getlocalstoragedata = () => {
  const lists = localStorage.getItem("mytodo");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getlocalstoragedata());
  const [isedititem, setiseditItems] = useState("");
  const [togglebutton, settogglebutton] = useState(false);

  const addItem = () => {
    if (!inputData) {
      alert("fill the input data");
    } else if (inputData && togglebutton) {
      setItems(
        items.map((currElem) => {
          if (currElem.id === isedititem) {
            return { ...currElem, name: inputData };
          }
          return currElem;
        })
      );
      setInputData("");
      setiseditItems(null);
      settogglebutton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  const editItem = (index) => {
    const item_todo_edited = items.find((currElem) => {
      return currElem.id === index;
    });
    setInputData(item_todo_edited);
    setiseditItems(index);
    settogglebutton(true);
  };

  const deleteItem = (index) => {
    const updatedItem = items.filter((currElem) => {
      return currElem.id !== index;
    });
    setItems(updatedItem);
  };
  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("mytodo", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todo" />
            <figcaption>Add your items here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items"
              className="form-control"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            {togglebutton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          <div className="showItems">
            {items.map((currElem) => {
              return (
                <div className="eachItem" key={currElem.id}>
                  <h3>{currElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(currElem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(currElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
