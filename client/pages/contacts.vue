<template>
  <div class="contacts-component">
    <h3>Contacts:</h3>
    <ul class="list">
      <li v-for="{ name, link } in contacts" :key="name">
        <a :href="link">{{ name }}</a>
      </li>
    </ul>
  </div>
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
  ul {
    display: flex;
  }

  li:not(:last-child) {
    margin-right: 20px;
  }
}
</style>
