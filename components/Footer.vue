<template>
  <footer class="footer">
    <div class="is-hidden-mobile">
      <div class="columns has-text-centered is-vcentered">
        <div class="column is-2">
          <div class="tree-area">
          <img class="tree" src="../assets/tree.png" alt="tree">
          </div>
        </div>
        <div class="column is-8">
          <p>©IMURA ENVELOPE CO., INC. All Rights Reserved.</p>
        </div>
        <div class="column is-2">
        </div>
      </div>
    </div>
    <div class="is-hidden-tablet">
      <div class="columns  has-text-centered is-vcentered">
        <div class="column is-12">
          <div class="tree-area">
          <img class="tree-sp" width="100" src="../assets/tree.png" alt="tree">
          </div>
        </div>
      </div>
      <div class="columns has-text-centered is-vcentered mt-3">
        <div class="column is-12">
          <p>©IMURA ENVELOPE CO., INC. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.footer {
  height: 80px;
}
.tree-area {
  position: relative;
}
.tree {
  position: absolute;
  left: 20px;
  top: -130px;
  z-index: 100;
}
.tree-sp {
  position: absolute;
  left: 20px;
  top: -150px;
  z-index: 100;
}
</style>
