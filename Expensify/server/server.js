const 
    express = require('express'),
    path = require('path'),
    app = express(),
    publicPath = path.join(__dirname, '..', 'dist'),
    PORT = process.env.PORT || 3000;


app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server up on Port ${PORT}`)
})