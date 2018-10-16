let requireAuthentication = (Component) => (props) =>
    (localStorage.getItem('token')) ? Component : (props.history.push('/login'));

export default requireAuthentication;