module.exports = {
  stories: [
    '../../../libs/auth/components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../libs/auth/feature/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../libs/dashboard/components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../libs/dashboard/feature/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../libs/home/components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../libs/home/feature/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../libs/shared/ui-components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../../../.storybook/public'],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
