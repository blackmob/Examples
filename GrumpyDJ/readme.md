# GrumpyDJ

An example react, redux, typescript application.

Demonstrates:

1. Fetching data from a public api and consuming withing a react redux application.
2. React app with React Router and Redux that displays this data.
3. Using a canvas within a React application.
3. Using the Microsoft Emotion Api within a React application
4. Some simple unit tests using the Jest test tools and a custom mock. 

## Running the app

### 1. Install Node/npm

Make sure you have Node.js installed

### 2. Clone and install dependencies

```
git clone https://github.com/blackmob/Examples.git
cd GrumpyDJ
npm install
```
### 3. Install typings

Make sure you have typings installed

```
typings install
```

### 4. Update Microsoft Emotion API key 

Go to https://www.microsoft.com/cognitive-services/en-us/emotion-api and select the 
'Get started for free' button, sign up for an account and get your free key.

Search for and replace the following string '[your key here]]' in the file app/services/daaService.ts  

### 5. Run the app

```
npm start
```

### 6. Run the unit tests

``` 
npm test
```

