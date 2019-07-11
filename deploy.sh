dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t sdg-do-something-app-image ./bin/release/netcoreapp2.2/publish

docker tag sdg-do-something-app-image registry.heroku.com/do-something-app/web

docker push registry.heroku.com/do-something-app/web

heroku container:release web -a do-something-app

# sudo chmod 755 deploy.sh
# ./deploy.sh