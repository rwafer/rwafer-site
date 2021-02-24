<p align="center">
    <img alt="RWIcon" src="http://0.gravatar.com/avatar/431dc2f6e7b48cc21354bd0c7d0eb8bbGatsby-Monogram.svg" width="60" />
</p>
<h1 align="center">
  Richard Wafer's website
</h1>

This website was built using Gastby. A nice and simple web framework running on NodeJS. This is the best way for an experienced backend developer to build quickly a website.

## 🚀 Notes

**Start gatsby in develop mode**

From the root of the project.

```shell
$ gatsby develop
```

The site start and is available on: <a href="http://localhost:8000">`http://localhost:8000`</a>

**Visual regression testing**

I'm using a really fun and simple visual regression testing framework to ensure I didnt break anything when modifying css for that website.

Install the tool globally:

```shell
$ npm install -g backstopjs
```

To run the test you can start gatsby in development and run:

```shell
$ npm run test
```

**Deployment**

That site is currently running on AWS and I'm using the aws-cli to upload the website to an S3 bucket.

So I run a KISS deployment pipeline. Build, Test and Deploy

The pipeline can be run using:

```shell
$ npm run deploy
```

EOF
