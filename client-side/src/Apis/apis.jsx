export default class Apis {
  // Singleton pattern
  static getInstance() {
    if (!this.instance) {
      this.instance = new Apis();
    }
    return this.instance;
  }

  AddNewScreen = async (
    componentName,
    route,
    validationRequired,
    selectedFile,
    fileContent
  ) => {
    try {
      const response = await fetch("/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          componentName,
          route,
          validationRequired,
          selectedFile,
          fileContent,
        }),
      });

      const data = await response.json();
      console.log("Create Response:", data);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  getAllNewScreens = async () => {
    try {
      const response = await fetch("/url");
      const data = await response.json();
      console.log("Read Response:", data);
    } catch (error) {
      console.error("Error reading data:", error);
    }
  };

  deleteScreen = async (screenId) => {
    try {
      const deleteUrl = `/url/${screenId}`; // Assuming the ID is appended to the URL
      const response = await fetch(deleteUrl, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log("Delete Response:", data);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  addNewGalleryItem = async (image, caption) => {
    try {
      const response = await fetch("/gallery-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image,
          caption,
        }),
      });

      const data = await response.json();
      console.log("Create Gallery Item Response:", data);
    } catch (error) {
      console.error("Error creating gallery item:", error);
    }
  };

  getAllGalleryItems = async () => {
    try {
      const response = await fetch("/gallery-url");
      const data = await response.json();
      console.log("Read Gallery Items Response:", data);
    } catch (error) {
      console.error("Error reading gallery items:", error);
    }
  };

  updateGalleryItem = async (itemId, image, caption) => {
    try {
      const updateUrl = `/gallery-url/${itemId}`;
      const response = await fetch(updateUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image,
          caption,
        }),
      });

      const data = await response.json();
      console.log("Update Gallery Item Response:", data);
    } catch (error) {
      console.error("Error updating gallery item:", error);
    }
  };

  deleteGalleryItem = async (itemId) => {
    try {
      const deleteUrl = `/gallery-url/${itemId}`;
      const response = await fetch(deleteUrl, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log("Delete Gallery Item Response:", data);
    } catch (error) {
      console.error("Error deleting gallery item:", error);
    }
  };
}
