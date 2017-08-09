module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'test-app',
      script    : './app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // // Second application
    // {
    //   name      : 'WEB',
    //   script    : 'web.js'
    // }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      key  : "/Users/jasonhsieh/.ssh/jasonhsieh",
      host : '45.63.120.169',
      ref  : 'origin/master',
      repo : 'https://github.com/JaosnHsieh/hello-world2.git',
      path : '/root/nodejs/hello-world2',
      env  : {
        NODE_ENV: 'production'
      },
      "post-deploy" : "npm install && pm2 startOrRestart  ecosystem.config.js --env production",

    }
    // develop : {
    //   user : 'root',
    //   key  : "/Users/jasonhsieh/.ssh/jasonhsieh",
    //   host : '45.63.120.169',
    //   ref  : 'origin/master',
    //   repo : 'git@github.com:JaosnHsieh/hello-world2.git',
    //   path : '/root/nodejs/hello-world2',
    //   'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env develop',
    //   env  : {
    //     NODE_ENV: 'develop'
    //   },
    //   "post-deploy" : "pm2 startOrRestart ecosystem.json --env production",

    // }
  }
};
