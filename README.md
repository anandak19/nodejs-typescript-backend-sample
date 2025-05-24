# Creating a Sample Node.js Backend Using TypeScript

A simple starter boilerplate for building a Node.js backend with TypeScript.

---

##  Steps to Set Up the Project

### 1. Open terminal in your project folder

### 2. Initialize a Node project

```bash
npm init -y
```

3. Initialize TypeScript

```bash
npx tsc --init
```

4. Create folders for your project
```
src/ – Contains your TypeScript source code
dist/ – Stores the compiled JavaScript outpu
```
5. Update package.json
Add the following:
```bash
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node dist/app.js"
  }
```

6. Update tsconfig.json
Make sure these fields are configured correctly:
```bash
  "module": "ES6",
  "rootDir": "./src",
  "outDir": "./dist",
  "moduleResolution": "node10"
```

7. Initial setup is now completed 
8. Installing external libraries and their type definitions
Example using Express:
```bash
  npm i express
  npm i --save-dev @types/express
```

 You're now ready to write your backend code in src/ and compile using:
```bash
  npm run build
```

Run the app using:
```bash
  npm start
```

