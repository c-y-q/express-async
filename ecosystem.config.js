module.exports = {
  apps : [{
    name: 'API',
    script: 'index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 'max',
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'dev'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ssh_options:'StrictHostKeyChecking=no',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'https://github.com/c-y-q/express-async.git',
      path : '/Users/eggsy_cao/shuang_an/pm2Depoly',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev'
    }
  }
};
