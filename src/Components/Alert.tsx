import "./Alert.scss";
interface IProps {
  name: string;
}
const Alert = ({ name }: IProps) => {
  return (
    <div className="container">
      <div className="card">
        <div>
          <h3>credit login form</h3>
        </div>
        <form method="get" className="form-input">

          <input type="text" name="" id="text"  placeholder="customer number or username "/>

          <input type="password" name="" id=""  placeholder="password"/>
          <h4>Are you new to website? <span><a href="/">Register here</a></span>
        </h4>
          <button>LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Alert;
