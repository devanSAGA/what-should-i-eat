// JSX - javascript XML

const appRoot = document.getElementById('app');

const app = {
  title: 'Indecion App',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
  const template = (
    <div>
      <p> {app.options.length} </p>
      <button onClick={onRemoveAll}> Remove All </button>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}> Make Decision for me! </button>
      <ol> { app.options.map((option) => <li key={option}>{option} </li>) } </ol>

      <form onSubmit= {onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
    );

  ReactDOM.render(template, appRoot);
};

render();
