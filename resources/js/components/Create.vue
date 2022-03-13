<template>
  <div>
    <h3 class="text-center">Create Product</h3>
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="addProduct">
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="product.title" />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="text" class="form-control" v-model="product.price" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="product.description" />
          </div>
          <button type="submit" class="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    addProduct() {
      this.axios
        .post("/api/products", this.product)
        .then((response) => this.$router.push({ name: "home" }))
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
  },
};
</script>