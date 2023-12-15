import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBFile,
  MDBTextArea,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import Apis from "../../Apis/apis";


const CreateNewScreen = () => {
  const navigateTo = useNavigate();
  const [componentName, setComponentName] = useState("");
  const [route, setRoute] = useState("");
  const [validationRequired, setValidationRequired] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setFileContent(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleSaveFile = async () => {
    if (selectedFile) {
      try {
        // Call the API method to save the file content
        await Apis.getInstance().AddNewScreen(
          componentName,
          route,
          validationRequired,
          selectedFile,
          fileContent
        );

        // Display success message or perform additional actions
        alert("File saved successfully!");
      } catch (error) {
        console.error("Error saving file:", error);
      }
    }
  };
  const handleRenderPreview = () => {
    // Open a new tab
    const newTab = window.open("", "_blank");

    // Render the HTML content in the new tab
    if (newTab) {
      newTab.document.write(fileContent);
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="6">
              <MDBInput
                className="my-3"
                label="Component Name"
                value={componentName}
                onChange={(e) => setComponentName(e.target.value)}
              />

              <div className="d-flex my-3">
                <MDBInput
                  label="Route"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                />

                <div>
                  <MDBDropdown className="mx-2">
                    <MDBDropdownToggle
                      color="light"
                      className="btn btn-sm border border-all"
                    >
                      {validationRequired === ""
                        ? "Validation Required"
                        : validationRequired}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem
                        style={{ textAlign: "center", cursor: "pointer" }}
                        onClick={() => setValidationRequired("true")}
                      >
                        True
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        style={{ textAlign: "center", cursor: "pointer" }}
                        onClick={() => setValidationRequired("false")}
                      >
                        False
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </div>
              </div>
              <MDBFile label="" id="customFile" onChange={handleFileChange} />
              <div className="d-flex">
                <MDBBtn
                  color="light"
                  className="my-3 btn-sm btn-light border border-all"
                  onClick={handleSaveFile}
                >
                  Save File
                </MDBBtn>
                <MDBBtn
                  color="light"
                  className="my-3 btn-sm btn-light border border-all mx-3"
                  onClick={handleRenderPreview}
                >
                  Render & Preview
                </MDBBtn>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <MDBTextArea label="File Content" value={fileContent} rows={25} />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default CreateNewScreen;
