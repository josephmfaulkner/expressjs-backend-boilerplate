import app from './App';

const port = process.env.PORT || 3080;  
app.listen(port, err => {
  if (err) {
    console.error(`Error starting server: ${err}`);
    process.abort();
  }
  console.log(`Server is listening on port ${port}.`);
  return;
});
