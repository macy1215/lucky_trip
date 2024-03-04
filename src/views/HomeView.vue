<template>
  <nav class="navbar navbar-expand-lg mb-3 container">
      <div class="container-fluid">
            <RouterLink to="/" >
                <span class="nav-link logostyle">
                    <a>lucky-trip</a>
                </span>
            </RouterLink>
        <div class="collapse navbar-collapse justify-content-end" id="nav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary active" aria-current="page"
                    to="/admin/products" >方案列表</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary" aria-current="page"
                    to="/admin/orders" >訂單列表</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link text-primary" aria-current="page"
                    to="/admin/blogs" >文章列表</RouterLink>
                  </li>
              </ul>
        </div>
      </div>
    </nav>
    <RouterView></RouterView>
</template>

<script>

export default {
  components: {

  },
};
</script>

<style scoped>
</style>
