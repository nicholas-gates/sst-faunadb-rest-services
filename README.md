# Demonstration Repo For Interaction Error Between SST and FaunaDB

This is a showcase repo demo'ing that sst.dev releases *after* 2.0.35 produce an error when importing the faunadb package (https://github.com/fauna/faunadb-js).

`Error: URL is not a constructor`

Steps to reproduce

1. Clone this repo which is based on the basic sst.dev `rest-services` example. The modification is that it attempts to load the `faunadb` package in the `GET` endpoint for `notes`
1. Run the usual `npm install` for a sst.dev project
1. Run `npm run dev`
1. Access `https://[aws_domain]/notes
1. Observe this error in the console: `Error: URL is not a constructor`

Current Workaround:
1. Downgrade from SST 2.0.36 to 2.0.35 and re-run the above
2. Observe that the faunadb package can be imported without errors and the REST endpoint works as expected.

Blockers:
1. No SST2 package beyond 2.0.35 works with faunadb
