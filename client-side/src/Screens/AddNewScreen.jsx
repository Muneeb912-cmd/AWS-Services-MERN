import { MDBContainer } from "mdb-react-ui-kit";
import Footer from "../Components/footer/footer";
import OffcanvasExample from "../Components/header/header";
import CreateNewScreen from "../Components/renderScreen/createNewScreen";


const AddNewScreen = () => {
  return (
    <>
      <OffcanvasExample />
      <MDBContainer className="my-4">
        <h1>Render New Screen</h1>
        <hr />
        <CreateNewScreen />
      </MDBContainer>
      <Footer />
    </>
  );
};
export default AddNewScreen;
