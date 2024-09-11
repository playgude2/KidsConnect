// import html2canvas from "html2canvas";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// export const generatePDF = async (elementId: string): Promise<string> => {
//   const element = document.getElementById(elementId);
//   if (element) {
//     const canvas = await html2canvas(element);
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = {
//       content: [
//         {
//           image: imgData,
//           width: 500, // Adjust width as needed
//         },
//       ],
//     };
//     return new Promise((resolve) => {
//       const doc = pdfMake.createPdf(pdf);
//       doc.getDataUrl((dataUrl) => {
//         resolve(dataUrl);
//       });
//     });
//   }
//   return "";
// };
