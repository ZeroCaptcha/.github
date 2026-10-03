# Security policy

## Report a vulnerability

Report it privately, never in a public issue: open a report with GitHub's private vulnerability reporting on the affected repository (its **Security** tab, then **Report a vulnerability**). If it is about the ZeroCaptcha service itself rather than the code here, report it the same way on the [zerocaptcha](https://github.com/ZeroCaptcha/zerocaptcha/security/advisories/new) repository.

Please include what you found, how to reproduce it, and what an attacker could do with it. We reply as soon as we can, fix what is confirmed, and credit you in the advisory if you wish.

## Your API key

If you committed or leaked a ZeroCaptcha API key (`zc_live_…`), revoke it on the dashboard's API keys page straight away and create a new one. A revoked key stops working at once.

## Supported versions

Only the latest commit on each repository's main branch is supported.
