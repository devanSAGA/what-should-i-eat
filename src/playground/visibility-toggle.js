let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const beta = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick = {toggleVisibility}> {visibility ? 'Hide details' : 'Show details'} </button>

      {visibility && (
        <div>
          <p>Hey we can see the details!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(beta, document.getElementById('app'));
};

render();
