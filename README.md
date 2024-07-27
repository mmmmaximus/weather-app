# to run the project locally
> clone the repo

> change the .env.template file to .env

> npm i

> npm start 

# ui assumptions
> assumed certain measurements, colors, font sizes not properly defined in figma

> assumed total length of search history viewable is 5

# optimizations
> cached the country to lat lon api response as the data is static

> loaders to prevent further action while api is loading

> cached the last 5 search terms in the dropdown

# future optimizations
> debounce on screen resize to reduce the rerendering of components when screen size change

> theme provider to be configured in a separate state, instead of check theme on every component render

> lazy load certain data first while the weather data is still being retrieved
