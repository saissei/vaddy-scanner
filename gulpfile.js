/* eslint-disable */
"use strict";

const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const rimraf = require("rimraf");

const plumber = require("gulp-plumber");

const ts = require("gulp-typescript");
const tsc = ts.createProject("./tsconfig.json");

gulp.task("main", () => {
  return gulp
    .src([
      "src/main/**/**",
      "!src/**/__tests__/*.test.ts"
    ], {
      since: gulp.lastRun("main")
    })
    .pipe(plumber())
    .pipe(tsc())
    .pipe(gulp.dest("dist/main"));
});

gulp.task("controller", () => {
  return gulp
    .src([
      "src/controller/**/**",
      "!src/**/__tests__/*.test.ts"
    ], {
      since: gulp.lastRun("controller")
    })
    .pipe(plumber())
    .pipe(tsc())
    .pipe(gulp.dest("dist/controller"));
});

gulp.task("interactor", () => {
  return gulp
    .src([
      "src/interactor/**/*.ts",
      "!src/**/__tests__/*.test.ts"
    ], {
      since: gulp.lastRun("interactor")
    })
    .pipe(plumber())
    .pipe(tsc())
    .pipe(gulp.dest("dist/interactor"));
});

gulp.task("logger", () => {
  return gulp
    .src([
      "src/logger/**/*.ts",
      "!src/**/__tests__/*.test.ts"
    ], {
      since: gulp.lastRun("logger")
    })
    .pipe(plumber())
    .pipe(tsc())
    .pipe(gulp.dest("dist/logger"));
});

gulp.task("presenter", () => {
  return gulp
    .src([
      "src/presenter/**/*.ts",
      "!src/**/__tests__/*.test.ts"
    ], {
      since: gulp.lastRun("presenter")
    })
    .pipe(plumber())
    .pipe(tsc())
    .pipe(gulp.dest("dist/presenter"));
});

gulp.task("repository", () => {
  return gulp
    .src([
      "src/repository/**/*.ts",
      "!src/**/__tests__/*.test.ts"
  ], {
      since: gulp.lastRun("repository")
    })
    .pipe(plumber())
    .pipe(tsc())
    .pipe(gulp.dest("dist/repository"));
});

gulp.task("routes", () => {
  return gulp
    .src([
      "src/routes/**/*.ts",
      "!src/**/__tests__/*.test.ts"
  ], {
      since: gulp.lastRun("routes")
    })
    .pipe(plumber())
    .pipe(tsc())
    .pipe(gulp.dest("dist/routes"));
});

gulp.task("server", () => {
  return gulp
    .src([
      "src/server/**/*.ts",
      "!src/**/__tests__/*.test.ts"
  ], {
      since: gulp.lastRun("server")
    })
    .pipe(plumber())
    .pipe(tsc())
    .pipe(gulp.dest("dist/server"));
});

gulp.task("types", () => {
  return gulp
    .src([
      "src/types/**/*.ts",
      "!src/**/__tests__/*.test.ts"
    ], {
      since: gulp.lastRun("types")
    })
    .pipe(plumber())
    .pipe(tsc())
    .pipe(gulp.dest("dist/types"));
});

gulp.task("valueObject", () => {
  return gulp
    .src([
      "src/valueObject/**/*.ts",
      "!src/**/__tests__/*.test.ts"
    ], {
      since: gulp.lastRun("valueObject")
    })
    .pipe(plumber())
    .pipe(tsc())
    .pipe(gulp.dest("dist/valueObject"));
});

gulp.task("nodemon", callback => {
  let started = false;
  return nodemon({
    script: "dist/server/Server.js",
    watch: ["dist/**/*.js"],
    ext: "js",
    stdout: true,
    delay: 500,
    env: {
      NODE_ENV: "development"
    }
  })
    .on("start", () => {
      if (!started) {
        callback();
        started = true;
      }
    })
    .on("restart", () => {
      console.log("SERVER RESTARTED");
    });
});

gulp.task("clean", callback => {
  rimraf("dist", callback);
});

gulp.task(
  "build",
  gulp.series(
    "clean",
    "controller",
    "interactor",
    "logger",
    "presenter",
    "repository",
    "routes",
    "server",
    "types",
    "main",
    "valueObject"
  )
);

gulp.task(
  "default",
  gulp.parallel("nodemon", callback => {
    gulp.watch("src/controller/**/*.ts", gulp.series("controller"));
    gulp.watch("src/interactor/**/*.ts", gulp.series("interactor"));
    gulp.watch("src/logger/**/*.ts", gulp.series("logger"));
    gulp.watch("src/presenter/**/*.ts", gulp.series("presenter"));
    gulp.watch("src/repository/**/*.ts", gulp.series("repository"));
    gulp.watch("src/routes/**/*.ts", gulp.series("routes"));
    gulp.watch("src/server/**/*.ts", gulp.series("server"));
    gulp.watch("src/types/**/*.ts", gulp.series("types"));
    gulp.watch("src/valueObject/**/*.ts", gulp.series("valueObject"));
    gulp.watch("src/main/**/*.ts", gulp.series("main"));
    callback();
  })
);
