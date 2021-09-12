module.exports = {
  bumpFiles: [
    {
      filename: "package.json",
    },
    {
      filename: "app.json",
      updater: require.resolve("standard-version-expo"),
    },
    {
      filename: "app.json",
      updater: require.resolve("standard-version-expo/ios"),
    },
    {
      filename: "app.json",
      updater: require.resolve("standard-version-expo/android"),
    },
  ],
  types: [
    {
      section: "Features",
      type: "feat",
    },
    {
      section: "Bug Fixes",
      type: "fix",
    },
    {
      section: "Chores",
      type: "chore",
    },
    {
      section: "Documentation",
      type: "docs",
    },
    {
      section: "Styling",
      type: "style",
    },
    {
      section: "Refactoring",
      type: "refactor",
    },
    {
      section: "Performance",
      type: "perf",
    },
    {
      section: "Test",
      type: "test",
    },
  ],
};
