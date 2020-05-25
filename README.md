# TV Shows API

**NOTE** This API doesn't hold all the data right now. If you help to collect the data, it will become ready soon.

## Why?

There are many APIs which provide the data about TV Shows. But, This stands among them.

- **100% Free**   
  It's totally free. When you use this API in your app or something, (If you can) mention that you are using this API where you use it.
- **Open Source**   
  It's open sourced and built simple. So you can see what it is doing behind.
- **No Authentication**   
  Just use this API, without any hassle.

## Usage

This API is now running on [Vercel](https://www.vercel.com) and [Heroku](https://www.heroku.com). Here are the links.

- https://tv-shows-api-psi.now.sh
- https://tv-shows-api.ksahithyan.now.sh
- https://tv-shows-api-git-master.ksahithyan.now.sh
- https://api-tvshows.herokuapp.com

## Contribution

If you want to contribute to this project, do these.

1. Find a bug/error and open an issue on GitHub.
2. Find a bug/error/improvement, fix it and pull request.
3. Add your favorite shows to the [data object in data-gen.ts](./src/data-gen.ts#L10). Make sure there are no errors.
4. Go to [TOOD.md](/TODO.md) and fix/add something that mentioned there.  
And be sure to do these before pull request.
   1. Remove checked items. (which were fixed in the previous commit)
   2. Check what you have fixed/added.

## Development

1. Clone this repo.
2. `npm install`.
3. `npm run dev` will run the express server at http://localhost:3000   
You can override the port that with `PORT` argument.