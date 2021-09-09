<template>
    <div class="card">
  <div class="card-content">
    <p class="title">
      {{note.note}}
    </p>
    <p class="subtitle">
      {{ note.content }}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/VantolBennett">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="https://github.com/titan-65">Github</a>
      </span>
    </p>
  </footer>
</div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>