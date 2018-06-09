import * as React from 'react';

const MyList = (props: any) => {
  const { list } = props;

  return (
    <div className="list">
      { list.length === 0 ? null :
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { list.map((item: any) => 
              <tr key={`key-${item.id}`}>
                <td><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} /></td>
                <td>{ item.name }</td>
                <td>
                  <button type="button" className="btn btn-primary btn-sm cardInfo__button">View</button>{' '}
                  <button type="button" className="btn btn-danger btn-sm cardInfo__button">Remove</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </div>
  )
}

export default MyList;
