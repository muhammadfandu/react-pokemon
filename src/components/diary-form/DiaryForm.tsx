import React, { useState } from 'react';

export default function DiaryForm() {
  const [title, setTitle] = useState('');

  const onSubmit = (event: any) => {
    event.preventDefault();
    let itemObject = {
      title: title,
    };
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={onSubmit}>
            <div className="diary-form">
              <input
                onChange={(event) => setTitle(event.target.value)}
                type="text"
                placeholder="Add an item"
                className="form-control"
              />
              <button className="btn btn-primary mt-2" type="submit">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
