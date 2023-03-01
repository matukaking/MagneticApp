import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

function SetAlbum() {
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFlesArray = Array.from(selectedFiles);

    const imagesArray = selectedFlesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  return (
    <section>
      <Box mt={6}>
        <label htmlFor="file-input" className="upload-label">
          <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
          <span className="upload-text">+ Add Images</span>
          <span className="upload-subtext">up to 10 images</span>
          <input
            type="file"
            id="file-input"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png, image/jpeg, image/webp"
            hidden
          />
        </label>
        <br />
        {selectedImages.length > 0 &&
          (selectedImages.length > 10 ? (
            <p className="error">
              You can't upload more than 10 images! <br />
              <span>
                please delete <b>{selectedImages.length - 10}</b> of them
              </span>
            </p>
          ) : (
            <button
              className="upload-btn"
              onClick={() => {
                console.log("UPLOAD IMAGES");
              }}
            >
              {" "}
              UPLOAD {selectedImages.length} IMAGE
              {selectedImages.length === 1 ? "" : "S"}
            </button>
          ))}

        <SimpleGrid columns={[3, 3, 3]} spacing={4}>
          {selectedImages &&
            selectedImages.map((image) => {
              return (
                <div
                  key={image}
                  className="image-wrapper"
                  style={{ position: "relative" }}
                >
                  <Image
                    src={image}
                    alt="upload"
                    height="100px"
                    width="100px"
                    key={image}
                  />
                  <button
                    onClick={() =>
                      setSelectedImages(
                        selectedImages.filter((e) => e !== image)
                      )
                    }
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              );
            })}
        </SimpleGrid>
      </Box>
    </section>
  );
}

export default SetAlbum;
