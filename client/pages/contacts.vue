<template>
  <ul class="contacts-component">
    <li v-for="{ name, link } in contacts" :key="name">
      <a :href="link">{{ name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ContactsPage',
  data() {
    return {
      contacts: []
    };
  },
  async created() {
    try {
      this.contacts = await this.$axios.$get('/api/contacts');
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
.contacts-component {
  display: flex;

  li:not(:last-child) {
    margin-right: 20px;
  }
}
</style>
