# Dependency Propagation Troubleshooting

This repository documents and supports the dependency propagation flow used by the KeshavSoft package chain.

The current investigation focuses on why publishing `express-check-any-for-import` version `1.4.4` did not trigger the downstream `Update dependency` workflow in `express-fix-any-js`, even though the publishing workflow itself appeared to succeed.

## What Happened

The `Publish Package to npmjs with Notification` workflow completed successfully:

* The `publish` job deployed version `1.4.4` to npm.
* The `notify-dependents` job also finished green.

However, the dependent repository did not receive or act on the expected `repository_dispatch` event.

## Root Cause

The notification workflow used `curl` to call the GitHub Repository Dispatches API. By default, `curl` can exit successfully even when GitHub returns an HTTP error such as `401 Unauthorized` or `404 Not Found`.

That meant the GitHub Actions job could look successful while the actual dispatch request had failed.

## Visibility Improvement

The notification workflows were updated to use `curl -i`, so GitHub Actions logs now show the HTTP status, response headers, and any JSON error body returned by GitHub.

This change was applied across:

* `express-check-any-for-import/.github/workflows/notify-dependents.yml`
* `express-fix-any-js/.github/workflows/notify-dependents.yml`
* `express-fix-endpoints-get-js/.github/workflows/notify-dependents.yml`

## How To Verify

Check the `REPO_DISPATCH_TOKEN` secret in the source repository and confirm that it is a valid GitHub PAT with write access to the destination repository.

Then rerun the publish workflow and inspect the `notify-dependents` job logs:

* `HTTP/2 204` means the dispatch succeeded.
* `HTTP/2 401` means the token is invalid, expired, or unauthorized.
* `HTTP/2 404` usually means the token cannot access the destination repository or the target repository path is wrong.

For the full walkthrough, see [propagation-troubleshooting.md](propagation-troubleshooting.md).
