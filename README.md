<div>
  <table>
    <thead>
      <tr>
        <th>Overall</th>
        <th>MFE/Shell</th>
        <th>MFE/Home</th>
        <th>@spotify-app/api-client</th>
        <th>@spotify-app/auth-utils</th>
      </tr>
      </thead>
      <tbody>
        <!-- build status -->
        <tr>
          <td>
            <img src="https://github.com/matiushariman/spotify-app/actions/workflows/integration.yml/badge.svg" alt="Overall CI" />
          </td>
          <td>
            <img src="https://github.com/matiushariman/spotify-app/actions/workflows/shell-test.yml/badge.svg" alt="shell CI" />
          </td>
          <td>
            <img src="https://github.com/matiushariman/spotify-app/actions/workflows/home-test.yml/badge.svg" alt="home CI" />
          </td>
          <td>
            <img src="https://github.com/matiushariman/spotify-app/actions/workflows/api-client-test.yml/badge.svg" alt="API Client CI" />
          </td>
          <td>
            <img src="https://github.com/matiushariman/spotify-app/actions/workflows/auth-utils-test.yml/badge.svg" alt="Auth utils CI" />
          </td>
        </tr>
        <!-- code coverage -->
        <tr>
          <td>
            <img src="https://codecov.io/gh/matiushariman/spotify-app/branch/main/graph/badge.svg" alt="overall coverage" />
          </td>
          <td>
            <img src="https://codecov.io/gh/matiushariman/spotify-app/branch/main/graph/badge.svg?flag=shell" alt="shell coverage" />
          </td>
          <td>
            <img src="https://codecov.io/gh/matiushariman/spotify-app/branch/main/graph/badge.svg?flag=home" alt="home coverage" />
          </td>
          <td>
            <img src="https://codecov.io/gh/matiushariman/spotify-app/branch/main/graph/badge.svg?flag=api-client" alt="api client coverage" />
          </td>
          <td>
            <img src="https://codecov.io/gh/matiushariman/spotify-app/branch/main/graph/badge.svg?flag=auth-utils" alt="auth utils coverage" />
          </td>
        </tr>
      </tbody>
  </table>
</div>

# Spotify App

## Microfrontends

- `shell` - responsible for orchestrating client-side routing & binding apps together
- `home` - TBD

## Packages

- `@spotify-app/api-client` - API client wrapper for Spotify Web API
- `@spotify-app/auth-utils` - utilities functions for authenticating user

<!-- GETTING STARTED -->
## Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/matiushariman/spotify-app.git
   ```
2. Install dependencies
   ```sh
   yarn install
   ```

## Contributors

<a href="https://github.com/matiushariman/spotify-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=matiushariman/spotify-app" alt="contributors" />
</a>



