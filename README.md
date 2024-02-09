# Nearby Places

This project is an application prototype that recognizes your location and tells you if you are close to any of the key points.

### Prerequisites

This application was developed on a machine with the following versions of Npm, Yarn and Node.js, and may not work correctly on other versions.

| Technologies                     | Version |
| -------------------------------- | ------- |
| [NPM](https://www.npmjs.com/)    | 9.6.7   |
| [Yarn](https://yarnpkg.com/)     | 1.22.19 |
| [Node Js](https://nodejs.org/en) | 18.17.0 |

Also make sure you have git installed.

## Install and Run

Follow these steps to run the project locally.
Using a terminal, go to the folder where you want to clone the repository, then run the following command:

```bash
git clone https://github.com/MatheusCordeiroP/NearbyPlaces.git
```

Then go to repository folder typing:

```bash
cd NearbyPlaces
```

Install project dependencies using Yarn or npm.

```bash
npm install
```

At file `src/utils/places.js`, you can add as many locations as you want, writing its title, its coordinates, and how many meters in radius that location should be detected.

After the previous steps are completed, you can run the project with the following command:

```bash
npx expo start
```

## About the project

This project isn't very large or complex, it was made in about 4 hours, and it has only one screen with the two following states:

- If the location permissions aren't allowed, the application will show you a message asking for you to go to settings and allowing it.

- If the location permissions are already allowed, the application will show you your position coordinates, and show a text of what places are you nearby.
