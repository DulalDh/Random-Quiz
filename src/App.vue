<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
          <br>
            <input v-model="fruitInput">
            <hr style="width: 0%">
            <ul class="list-group">
                <li class="list-group-item" style="width: 31%" v-for="fruit in fruits">{{ fruit }}</li>
            </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {FruitMixins} from './FruitMixins'
export default {
  mixins: [FruitMixins]
}
</script>