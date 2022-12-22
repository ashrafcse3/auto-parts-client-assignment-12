# Welcome to my auto parts react app

### Live website link: https://used-products-resale-eba66.web.app/
### Server git link: [Server repo](https://github.com/ashrafcse3/auto-parts-server-assignment-12)

admin username: admin@resale.com and password: 123456

I have used react js as a front end and express js for the back end. The features which are used throughout the project:
* Main functionality in the project are: crud products, crud categories
* For the product section: add, delte, update products and show them by their category id, will show a advertised product section in the home page if there is any product already advertised.
* User can login to the website as a seller or buyer. Their login functionality mainly handled by the firebase authentication and also saved their data on the app mongodb database to shield the user according to their role and power.
* Admin can delete any buyer or seller from the admin panel.
* A blog section where anyone can add the blog post on the db and showed them on the left hand side.
* Used different npm packages into the package like react-hook-form to look after the form nicely, react-Helmet to update each page title which actually can do a lot for the website seo and lastly, tanstack-query to fetch the data, caching and syncronize the data with its powerful function.