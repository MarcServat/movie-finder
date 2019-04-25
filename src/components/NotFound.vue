<template>
  <div class="ui placeholder segment">
    <div class="ui icon header">
      <i class="ban icon"></i>
      No movies to show.
    </div>
    <button class="ui primary button" @click="$router.push('/search')">
      Go to search movies
      <i class="hand point right outline icon"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "NotFound"
};
</script>
