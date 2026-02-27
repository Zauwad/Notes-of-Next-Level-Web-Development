const fs = require("fs");
const path = require("path");

// console.log(__dirname)
const messyDir = path.join(__dirname, "output", "messy-files"); //! Making a directory address nothing else
const organizedDir = path.join(__dirname, "output", "organized-files");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg", ".webp"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf", ".odt", ".md"],
  spreadsheets: [".xls", ".xlsx", ".csv", ".ods"],
  presentations: [".ppt", ".pptx", ".odp"],
  audio: [".mp3", ".wav", ".aac", ".flac", ".ogg", ".m4a"],
  video: [".mp4", ".avi", ".mkv", ".mov", ".wmv", ".flv", ".webm"],
  archives: [".zip", ".rar", ".7z", ".tar", ".gz"],
  code: [
    ".js",
    ".ts",
    ".jsx",
    ".tsx",
    ".html",
    ".css",
    ".json",
    ".xml",
    ".py",
    ".java",
    ".c",
    ".cpp",
    ".cs",
    ".php",
    ".rb",
    ".go",
    ".rs",
  ],
  others: [],
};
const testFiles = [
  "photo.jpg",
  "logo.svg",
  "document.pdf",
  "notes.txt",
  "report.docx",
  "spreadsheet.xlsx",
  "data.csv",
  "presentation.pptx",
  "lecture.odp",
  "song.mp3",
  "recording.wav",
  "video.mp4",
  "movie.mkv",
  "clip.webm",
  "archive.zip",
  "backup.rar",
  "script.js",
  "component.tsx",
  "style.css",
  "index.html",
  "config.json",
  "program.py",
];

function initializeDirectories() {
  if (!fs.existsSync(messyDir)) {
    fs.mkdirSync(messyDir, { recursive: true }); //! Making the messyDir address folder and adding recursive to create any necessarry file that doesnt exist in between the address

    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(messyDir, file), `Content of: ${file}`); //! Have to add the file name thats why used path.join
    });

    console.log("Messy-file has been created!!");
  }

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });

    Object.keys(categories).forEach((category) => {
      //! Iterating over category object's keys
      const categoryPath = path.join(organizedDir, category); //! Making path address for each category
      if (!fs.existsSync(categoryPath)) {
        fs.mkdirSync(categoryPath, { recursive: true }); //! If category file dont exist create that category file
      }
    });
  }
}
// initializeDirectories()

function getCategory(fileName) {
  const ext = path.extname(fileName).toLowerCase(); //! getting the extension part of file name

  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    } else {
      return "others";
    }
  }
}
