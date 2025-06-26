const { jsPDF } = window.jspdf;
let selectedImages = [];

document.getElementById("imageInput").addEventListener("change", (event) => {
  selectedImages = Array.from(event.target.files);
  const preview = document.getElementById("preview");
  preview.innerHTML = "";
  selectedImages.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(image);
    preview.appendChild(imgElement);
  });
});

function generatePDF() {
  if (selectedImages.length === 0) {
    alert("Please select images first.");
    return;
  }

  const pdf = new jsPDF();
  let count = 0;

  selectedImages.forEach((image, index) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;

      img.onload = function () {
        const imgWidth = 210;
        const imgHeight = (img.height * imgWidth) / img.width;

        if (index !== 0) pdf.addPage();
        pdf.addImage(img, "JPEG", 0, 0, imgWidth, imgHeight);

        count++;
        if (count === selectedImages.length) {
          pdf.save("converted.pdf");
        }
      };
    };
    reader.readAsDataURL(image);
  });
}const { jsPDF } = window.jspdf;
let selectedImages = [];

document.getElementById("imageInput").addEventListener("change", (event) => {
  selectedImages = Array.from(event.target.files);
  const preview = document.getElementById("preview");
  preview.innerHTML = "";
  selectedImages.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(image);
    preview.appendChild(imgElement);
  });
});

function generatePDF() {
  if (selectedImages.length === 0) {
    alert("Please select images first.");
    return;
  }

  const pdf = new jsPDF();
  let count = 0;

  selectedImages.forEach((image, index) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;

      img.onload = function () {
        const imgWidth = 210;
        const imgHeight = (img.height * imgWidth) / img.width;

        if (index !== 0) pdf.addPage();
        pdf.addImage(img, "JPEG", 0, 0, imgWidth, imgHeight);

        count++;
        if (count === selectedImages.length) {
          pdf.save("converted.pdf");
        }
      };
    };
    reader.readAsDataURL(image);
  });
}
