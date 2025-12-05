// Once nodejs couldnt detect typescript. NOde js only came to run js on server side. 
// nodejs 22.6 version -> Experimental typescript integ in nodejs using flag
// Typestriping -> leaving type from ts and behave like js then run js with node js
// nodejs 22.8 -> had to use another flag
// nodejs 22.18 -> Can use by default without using flag

// We will use a manager for downloading nodejs version. So that it doesnt create problem if i use different version on different screen -> NVM
// We can change node version for different project with it


// use nvm use command to use a installed nodejs version
// But have to make sure its installed

// Commands->
// // check version
// node -v || node --version

// // list locally installed versions of node
// nvm ls

// // list remove available versions of node
// nvm ls-remote

// // install specific version of node
// nvm install 18.16.1

// // set default version of node
// nvm alias default 18.16.1

// // switch version of node
// nvm use 20.5.1

// // install latest LTS version of node (Long Term Support)
// nvm install --lts

// // install latest stable version of node
// nvm install stable