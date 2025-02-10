// const axios = require("axios");
const fs = require("fs");
const path = require("path");

// URL API Swagger JSON
const SWAGGER_URL = "http://localhost:3000/api/v1/docs/swagger.json";

// Path penyimpanan file
const OUTPUT_PATH = path.join(__dirname, "swagger.json");

async function downloadSwagger() {
  try {
    // const response = await axios.get(SWAGGER_URL, {
    //   responseType: "json",
    // });
    const response = await fetch(SWAGGER_URL);
    const json = await response.json();

    // Menyimpan file
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(json));
    console.log(`Swagger JSON berhasil disimpan di: ${OUTPUT_PATH}`);
  } catch (error) {
    console.error("Gagal mendownload Swagger JSON:", error);
  }
}

// Jalankan fungsi download
downloadSwagger();
