// async function stall(stallTime = 300) {
//   await new Promise(resolve => setTimeout(resolve, stallTime));
// }

const vanillaData = {
  id: 267393,
  title: 'React Patterns',
  tags: ['skilled', 'react', 'patterns'],
  name: 'Gaurav Shrivastava'
};

const Util = {
  fetchVanilla: function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(vanillaData);
      }, 300)
    });
  }
};

export default Util;
