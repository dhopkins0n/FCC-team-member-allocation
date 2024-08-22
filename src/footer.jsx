const Footer = () => {

  var today = new Date();
  return (
    <footer>
       <div className="row justify-content-center mt-3 mb-4">
      <div className="col-8">
        <h1 > Footer</h1>
        <h3>Team Allocation App {today.getFullYear()}</h3>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
