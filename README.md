bb_prdiff
=========

The Bitbucket pull request interface doesn't provide an easy way to get a
single patch one can apply to a local repository and play with.  This fixes
that by adding a download link in the pull request header targeting bitbucket's
API, which does have a patch that should apply cleanly to the current
repository tip.

Installation
------------

Enable developer extensions in Chrome and add the repo's directory as an
unpacked extension.  Chrome web store wanted $5 to publish.
