npm init
entry point is app.js
npm i nodemon
add this to package.json "start": "nodemon app.js"
npm i express
npm i mongoose
npm install dotenv


create docker image -> 
  docker build -t express-backend .
create docker container -> 
  docker run -d --name express_backend -e "MONGODB_URI=mongodb://username:password@host.docker.internal:27017/user_management_db?authSource=admin" -p 5001:5000 express-backend

