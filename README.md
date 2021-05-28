# Weather-App-Nodejs
Weather application which displays the weather based on loaction searched. UI templates included.

Package/Framework used:
1. Express - Nodejs framework for creating a server.
2. Handlebars(hbs) - Usefull in rendering UI.
3. Request(Api client) - Usefull in fetching data by calling api's.

Steps to run the project:
1. git clone https://github.com/abdurrazack59/Weather-App-Nodejs.git
2. cd Weather-App-Nodejs
3. npm install
4. npm run dev
5. open http://localhost:5000/ in browser

Steps to deploy a node.js application to heruko:
1. cd "path/to/project"
2. git init
3. git commit -m "initial commit"
4. git remote add origin https://github.com/abdurrazack59/Weather-App-Nodejs.git
5. git branch -M main
6. git push -u origin main
7. git status
8. git add .
9. git commit -m "added files"
10. git pull
11. git push
12. heroku login
13. heroku create <project_name>
14. git push heroku HEAD:master
15. heroku ps:scale web=1
16. heroku open

Happy Coding... :)
