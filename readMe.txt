##################################################################################################################################################
#################################################################################################################################################

################################### BEWARE APIs ARE NOT TESTED PROPERLY ########################################################################

author: shibuKB
version: 1.0.0
description: backend for an app that create, store and retrieve record of phone numbers of spammer (and possibly other user)


#CONFIGURATION AND SETUP

>Go to dbConfig.js file to configure your connection for your database.
>run ' npm i ' to install any dependency (should not be required).
>run 'node index.js' to start the backend. It will automatically connect to database and create required tables in database if properly configured.
> Server is set to run on port 8080, as of now it can only be change directly in source code.( at index.js)

#IMPROVEMENT NEEDED

>Add a configuration file for server settings.
>Hash password before storing it to database.
>Make authentication feature to limit access to RESTful api.
>Some controllers are not working **BEWARE**.
>dt:24-01-2024 : work needed on add user
                

#IMPROVED!
>dt:24-01-2024 : simple implementation of spammer api working as intended.

                regduser worked! but need impoverment.logging out at 23:00