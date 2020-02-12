export default {
  // eslint-disable-next-line no-empty-pattern
  handleErrors(dispatch, err) {
    const errObject = err.response ? err.response.data : {};
    console.log('...err:', err);
    console.log('...ERR:', err.response);
    console.log('ERR OBJECT:', errObject);
  },
};
