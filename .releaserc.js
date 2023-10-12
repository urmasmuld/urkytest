module.exports = {
    branches: ['main'],
    plugins: [
      ["@semantic-release/commit-analyzer", {
      releaseRules: [
        { type: 'fix', release: 'patch' },
        { type: 'feat', release: 'minor' },
        { type: 'rel', release: 'major' },
      ],
    }],
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      ["@semantic-release/npm", {
        npmPublish: false,
      }],
      ["@semantic-release/github", {
        successComment: false,
        failComment: false,
      }],
    ],
  };
  