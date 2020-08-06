const mock = require('mock-require')

const mockCache = () => {
  const redis = require('redis-mock')
  require('bluebird').promisifyAll(redis.RedisClient.prototype)
  const cache = redis.createClient()
  mock('../src/api/middlewares/cache', cache)
  return cache
}

module.exports = {
  mockCache
}
