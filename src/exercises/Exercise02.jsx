import React, {useState} from 'react';

/* THE FIX STARTS HERE */

// Counter Component
const _Counter = ({ id, value, onIncrement, onDecrement }) => {
  return (
    <div className="d-flex my-2">
      <strong>{value}</strong>
      <div className="ml-2">
        <button
          className="btn btn-danger mr-1"
          onClick={() => {
            onDecrement(id, value)
          }}
        >-</button>
        <button
          className="btn btn-success"
          onClick={() => {
            onIncrement(id, value)
          }}
        >+</button>
      </div>
    </div>
  );
};

const Counter = ({ id, value, onChange }) => {
  return (
    <div className="d-flex my-2">
      <strong>{value}</strong>
      <div className="ml-2">
        <button
          className="btn btn-danger mr-1"
          onClick={() => {
            onChange(id, value - 1)
          }}
        >-</button>
        <button
          className="btn btn-success"
          onClick={() => {
            onChange(id, value + 1)
          }}
        >+</button>
      </div>
    </div>
  );
};

const Total = ({data}) => {
  const values = data.map((element) => {
    return element.value
  })

  const sum = values.reduce((a, b) => a + b, 0)

  return(
    <div>
      Total: {sum}
    </div>
  )
}

const GroupOfCounters = () => {
  const [ data, setData ] = useState(
    [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  )

  const incrementValue = (id, value) => {
    updateElement(id, value + 1)
  }

  const decrementValue = (id, value) => {
    updateElement(id, value - 1)
  }

  const updateElement = (id, value) => {
    const counterIndex = data.findIndex((counter) => counter.id === id)
    data[counterIndex].value = value
    setData([...data]);
  }

  return (
    <div>
      {data.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.value}
          onIncrement={(id, value) => incrementValue(id, value)}
          onDecrement={(id, value) => decrementValue(id, value)}
          onChange={(id, value) => updateElement(id, value)}
        />
      ))}
      <Total
        data={data}
      />
    </div>
  );
};

/* THE FIX ENDS HERE */

const Exercise02 = () => {
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>
        There are 2 components in this file: <strong>Counter</strong> and{' '}
        <strong>GroupOfCounters</strong>. The steps below will take you through
        modifying and adding components to change functionality and
        implementation.
      </p>

      <ol>
        <li>
          Update the <strong>Counter</strong> component to take{' '}
          <strong>onIncrement</strong> and <strong>onDecrement</strong>{' '}
          callbacks as props and ensure they update the counter's values
          independently. Each callback should take a single, integer value as a
          parameter which is the amount to increment the counter's existing
          value by.
        </li>

        <li>
          Move the global <strong>data</strong> array to the component state for
          the <strong>GroupOfCounters</strong> component.
        </li>

        <li>
          Render a fourth <strong>Counter</strong> component and ensure it's
          value is updated independently from the others.
        </li>

        <li>
          Create a <strong>Total</strong> component, which should display below
          the <strong>Counter</strong> components and always display the running
          total of all the <strong>Counter</strong> values.
        </li>

        <li>
          Make a copy of the <strong>Counter</strong> component, saving the
          original so you're instructor can view it later. Then do the
          following:
          <ol>
            <li>
              Remove the <strong>onIncrement</strong> and{' '}
              <strong>onDecrement</strong> props from the (new){' '}
              <strong>Counter</strong> component
            </li>
            <li>
              Add a single <strong>onChange</strong> callback prop that takes a
              single integer parameter — the new value for the counter.
            </li>
            <li>
              Ensure all <strong>Counter</strong> components still update and
              function independently after this change.
            </li>
          </ol>
        </li>
      </ol>

      <hr className="my-5" />

      <GroupOfCounters />
    </div>
  );
};

export default Exercise02;
