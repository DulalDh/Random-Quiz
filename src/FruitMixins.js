export const FruitMixins = {
  data()
  {
    return { 
          fruitList: ['Apple','Angur','Orang','Banana','Boroy','Ole'],
          fruitInput: ''
       }
  },
  computed: {
    fruits()
    {
      return this.fruitList.filter((element) => {
          return element.match(this.fruitInput);
      });
    }
  }
};
