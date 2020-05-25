exports.getProfile = (req, res) => {
  return res.status(200).json({
    data: {
      ...req.params,
      message: 'getProfile'
    }
  })
}
