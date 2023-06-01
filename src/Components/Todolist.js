import React, { useState } from 'react'


export default function Todolist() {

  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const addInput = () => {

    input.length >= 1 && setList((list) => {
      const updatedList = [...list, { task: input, completed: false }]
      console.log(updatedList)
      setInput('');
      return updatedList
    })
  }


  const removeTask = (i) => {
    const updateList = list.filter((elem, id) => {
      return i !== id;
    })
    setList(updateList);
  }
  const removeAll = () => {
    setList([]);
  }
  const handleCheck = (e, index) => {
    const updatedList = [...list];
    updatedList[index].completed = e.target.checked;
    setList(updatedList);
  };

  return (
    <>
      <div className='container'>

        <input className='input' type='text' name='text' placeholder='Add a Todo' onChange={handleChange} value={input} />
        <button className='addbtn' type='submit' onClick={addInput} >ADD TODO </button>
        <p className='listing'> Your Todos Here</p>
        {list.length > 0 &&
          list.map((data, i) => {
            return (
              <div>
                <div className={`row tsk ${data.completed ? 'completed' : ''}`} key={i}>
                  <input className='col-2 chk' type='checkbox' checked={data.completed} onChange={(e) => handleCheck(e, i)} />
                  <div className='col-8 listed'>{data.task}</div>
                  <i className="col-2 fa-solid fa-xmark crs" onClick={() => removeTask(i)} ></i>
                </div>
              </div>
            );
          })}

        {list.length >= 1 && <button className='rmvall' onClick={removeAll}>Remove All</button>}

      </div>
    </>
  )

}
