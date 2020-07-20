module.exports = {
  sendMessage: async(req, res) => {
    const {
      p1FirstName, p1LastName, p1Email,
      p2FirstName, p2LastName, p2Email,
      p3FirstName, p3LastName, p3Email,
      p4FirstName, p4LastName, p4Email,
      p5FirstName, p5LastName, p5Email,
      message
    } = req.body;

    console.log('p1:', p1FirstName, p1LastName, p1Email)
    console.log('p2:', p2FirstName, p2LastName, p2Email)
    console.log('p3:', p3FirstName, p3LastName, p3Email)
    console.log('p4:', p4FirstName, p4LastName, p4Email)
    console.log('p5:', p5FirstName, p5LastName, p5Email)
    console.log('message:', message)

    res.status(200).send("WIN: axios.post('/names')");
  }
}
