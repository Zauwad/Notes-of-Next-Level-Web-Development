// To convert from typescript to javascript. We need compiler. By installing ts we get one at deafult

// TO compile we use -> tsc fileName.ts

// "tsc -- init" -> TO configure by own wish, we use tsconfig.json similar to package.json
// We will keep ts code in rootDir(src) of config file -> Usually we will keep it in src folder
// And we will get compiled file in outDir(dist) of config file
// "target": "esnext", can change it to any es version as per wish

// "tsc" -> AFTER CONFIG SETUP DONE. USE IN TERMINAL
// This will use files from rootDir and compile in outDir

// I can write code in modern version, ts compiler will change it to that target es version

// ! HAVE TO RUN -> TSC --INIT IN TERMINAL -> TO GET OUTPUT AFTER RUNNING ANY TS CODE