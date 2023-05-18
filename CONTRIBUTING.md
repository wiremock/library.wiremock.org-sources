
# Contributing to WireMock API Templates Library

[![a](https://img.shields.io/badge/slack-Join%20us-brightgreen?style=flat&logo=slack)](http://slack.wiremock.org/)

Any contributions to the API Templates library are welcome!
Check out the [WireMock Contributor Guide](https://github.com/wiremock/community/edit/main/contributing/) for generic guidelines,
and see the sections below for particular contributing use-cases.

## Reporting issues

Please report any issues or feature requests as GitHub issues in the repository.
If you need help with troubleshooting, use the `#help` channel on
[WireMock Community Slack](https://slack.wiremock.org/).

## Adding or updating Templates

We maintain an open source repository of [API templates](https://github.com/wiremock/api-template-library)
that can be used with [WireMock](https://wiremock.org/) or [WireMock Cloud](https://wiremock.io).

If you would like to contribute an API template to enable other WireMock users to build their own mocks based off your template then please checkout the repository.

## API Templates Site Development

The website is powered by the [Hugo Framework](https://gohugo.io/)
and deployed to _AWS Amplify_.
It is possible to do development on any modern platform.

### Prerequisites

- Operating system: Linux, Windows, macOS
- Hugo is installed ([installation guide](https://gohugo.io/installation/))

### Running in the development mode

To run Hugo as a daemon for local development, use the following command:

```bash
hugo server -D
```

After that you will be able to see the website on `http://localhost:1313/`.
Most of the changes to the site source code
will be automatically propagated to the local site.

### Submitting changes

All changes should be submitted as pull requests,
then it will be reviewed and integrated by one of the maintainers.
Make sure to follow the pull request template.
